import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../../errors/AppErros";
import { Campus } from "../../../entities/campus";
import { ICampiRepository } from "../../../repositories/ICampiRepository";
import { IUniversidadeRepository } from "../../../repositories/IUniversidadesRepository";

@injectable()
class ListAllCampiUniversidadeUseCase {
  constructor(
    @inject("CampiRepository")
    private campusRepository: ICampiRepository,

    @inject("UniversidadesRepository")
    private universidadesRepository: IUniversidadeRepository
  ) {}

  async execute(universidade_id: string): Promise<Campus[]> {
    const universidadeExist = await this.universidadesRepository.findById(
      universidade_id
    );
    if (!universidadeExist)
      throw new AppError("Universidade não registrada", 404);

    const campi = await this.campusRepository.listCampiUniversidade(
      universidade_id
    );

    return campi;
  }
}

export { ListAllCampiUniversidadeUseCase };
