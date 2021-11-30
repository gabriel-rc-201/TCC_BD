import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../../errors/AppErros";
import { Campus } from "../../../entities/campus";
import { ICampiRepository } from "../../../repositories/ICampiRepository";
import { ICursoRepository } from "../../../repositories/ICursoRepository";

@injectable()
class ListCursoByCampusUseCase {
  constructor(
    @inject("CursosRepository")
    private cursosRepository: ICursoRepository,

    @inject("CampiRepository")
    private campusRepository: ICampiRepository
  ) {}

  async execute(campus_id: string): Promise<Campus[]> {
    const campusEsxists = await this.campusRepository.findById(campus_id);
    if (!campusEsxists) throw new AppError("campus não encontrado", 404);

    const campi = await this.cursosRepository.listCursoCampus(campus_id);

    return campi;
  }
}

export { ListCursoByCampusUseCase };
