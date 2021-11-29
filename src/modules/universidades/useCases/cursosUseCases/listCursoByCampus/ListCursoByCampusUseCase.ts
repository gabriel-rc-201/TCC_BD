import { inject, injectable } from "tsyringe";
import { Campus } from "../../../entities/campus";
import { ICursoRepository } from "../../../repositories/ICursoRepository";

@injectable()
class ListCursoByCampusUseCase {
  constructor(
    @inject("CursosRepository")
    private repository: ICursoRepository
  ) {}

  async execute(campus_id: string): Promise<Campus[]> {
    const campi = await this.repository.listCursoCampus(campus_id);

    return campi;
  }
}

export { ListCursoByCampusUseCase };
