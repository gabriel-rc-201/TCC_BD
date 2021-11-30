import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../../errors/AppErros";
import { ICampiRepository } from "../../../repositories/ICampiRepository";
import { IUniversidadeRepository } from "../../../repositories/IUniversidadesRepository";

interface IRequest {
  universidade_id: string;
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

  async execute({ nome, universidade_id }: IRequest) {
    const universidadeExists = await this.universidadeRepository.findById(
      universidade_id
    );

    if (!universidadeExists)
      throw new AppError(
        "Universidade não existe!!!\nVocê não pode registrar um campus sem uma universidasde!!!",
        404
      );

    const campusExists = await this.campusRepository.findByNome(nome);

    if (campusExists) throw new AppError("esse campus ja foi registrado!!!");

    await this.campusRepository.create({ nome, universidade_id });
  }
}

export { CreateCampusUseCase };
