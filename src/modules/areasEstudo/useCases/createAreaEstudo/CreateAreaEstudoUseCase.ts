import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppErros";
import { IAreaEstudoRepository } from "../../repositories/IAreasEstudoRepository";

interface IRequest {
  nome: string;
  id: string;
}

@injectable()
class CreateAreaEstudoUseCase {
  constructor(
    @inject("AreasEstudoRepository")
    private areasEstudodoRepository: IAreaEstudoRepository
  ) {}

  async execute({ id, nome }: IRequest): Promise<void> {
    const areasEstudoAlreadyExists =
      await this.areasEstudodoRepository.findById(id);

    if (areasEstudoAlreadyExists) {
      throw new AppError("Area de Estudo ja está registrada");
    }

    this.areasEstudodoRepository.create({ id, nome });
  }
}

export { CreateAreaEstudoUseCase };
