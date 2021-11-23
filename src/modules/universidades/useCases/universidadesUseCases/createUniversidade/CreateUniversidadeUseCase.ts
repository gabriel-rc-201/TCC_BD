import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../../errors/AppErros";
import { IUniversidadeRepository } from "../../../repositories/IUniversidadesRepository";

interface IRequest {
  nome: string;
  cnpj: string;
}

@injectable()
class CreateUniversidadeUseCase {
  constructor(
    @inject("UniversidadeRepository")
    private universidadeRepository: IUniversidadeRepository
  ) {}

  async execute({ nome, cnpj }: IRequest): Promise<void> {
    const universidadeExists = await this.universidadeRepository.findByCnpj(
      cnpj
    );

    if (universidadeExists) {
      throw new AppError("Universidade ja está registrada");
    }

    await this.universidadeRepository.create({ nome, cnpj });
  }
}

export { CreateUniversidadeUseCase };
