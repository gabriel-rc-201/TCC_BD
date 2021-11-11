import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../../errors/AppErros";
import { ICampiRepository } from "../../../repositories/ICampiRepository";
import { IUniversidadeRepository } from "../../../repositories/IUniversidadesRepository";

interface IRequest {
  universidadeid: number;
  nome: string;
}

@injectable()
class CreateCampusUseCase {
  constructor(
    @inject("CampiRepository")
    private campusRepository: ICampiRepository,

    @inject("UniversidadeRepository")
    private universidadeRepository: IUniversidadeRepository
  ) {}

  async execute({ nome, universidadeid }: IRequest) {
    const universidadeExists = await this.universidadeRepository.findById(
      universidadeid
    );

    if (!universidadeExists)
      throw new AppError(
        "Universidade não existe!!!\nVocê não pode registrar um campus sem uma universidasde!!!"
      );

    const campusExists = await this.campusRepository.findByNome(nome);

    if (campusExists) throw new AppError("esse campus ja foi registrado!!!");

    const id =
      parseInt((await this.campusRepository.findMaxId()).toString()) + 1;

    await this.campusRepository.create({ id, nome, universidadeid });
  }
}

export { CreateCampusUseCase };
