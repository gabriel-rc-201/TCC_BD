import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../../errors/AppErros";
import { IDominioRepository } from "../../../repositories/IDominiosRepository";
import { IUniversidadeRepository } from "../../../repositories/IUniversidadesRepository";

interface IRequest {
  dominio: string;
  universidadeid: number;
}

@injectable()
class CreateDominioUseCase {
  constructor(
    @inject("DominiosRepository")
    private dominioRepository: IDominioRepository,

    @inject("UniversidadeRepository")
    private universidadeRepository: IUniversidadeRepository
  ) {}

  async execute({ dominio, universidadeid }: IRequest) {
    const universidadeExists = await this.universidadeRepository.findById(
      universidadeid
    );

    if (!universidadeExists) throw new AppError("universidade não existe!!!");

    const dominioExists = await this.dominioRepository.findeByNome(dominio);

    if (dominioExists) throw new AppError("domino ja está registrado!!!");

    this.dominioRepository.create({ dominio, universidadeid });
  }
}

export { CreateDominioUseCase };
