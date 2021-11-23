import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../../errors/AppErros";
import { IDominioRepository } from "../../../repositories/IDominiosRepository";
import { IUniversidadeRepository } from "../../../repositories/IUniversidadesRepository";

interface IRequest {
  dominio: string;
  universidade_id: string;
}

@injectable()
class CreateDominioUseCase {
  constructor(
    @inject("DominiosRepository")
    private dominioRepository: IDominioRepository,

    @inject("UniversidadeRepository")
    private universidadeRepository: IUniversidadeRepository
  ) {}

  async execute({ dominio, universidade_id }: IRequest) {
    const universidadeExists = await this.universidadeRepository.findById(
      universidade_id
    );

    if (!universidadeExists) throw new AppError("universidade não existe!!!");

    const dominioExists = await this.dominioRepository.findeByNome(dominio);

    if (dominioExists) throw new AppError("domino ja está registrado!!!");

    await this.dominioRepository.create({ dominio, universidade_id });
  }
}

export { CreateDominioUseCase };
