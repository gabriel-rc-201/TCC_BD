import { inject, injectable } from "tsyringe";
import { Campus } from "../../../entities/campus";
import { ICursoRepository } from "../../../repositories/ICursoRepository";

@injectable()
class ListCursoByCampusUseCase {
  constructor(
    @inject("CursosRepository")
    private repository: ICursoRepository
  ) {}

  async execute(campusid: number): Promise<Campus[]> {
    const campi = await this.repository.listCursoCampus(campusid);

    return campi;
  }
}

export { ListCursoByCampusUseCase };
