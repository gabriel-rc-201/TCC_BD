import { inject, injectable } from "tsyringe";
import { TrabalhosAcademicos } from "../../entities/trabalhosAcademicos";
import { ITrabalhoAcademicoRepository } from "../../repositories/ITrabalhoAcademicoRepository";

@injectable()
class ListAllTrabalhosAcademicosUseCase {
  constructor(
    @inject("TrabalhoAcademico")
    private repository: ITrabalhoAcademicoRepository
  ) {}

  async execute(): Promise<TrabalhosAcademicos[]> {
    const trabalhos = await this.repository.listAll();
    return trabalhos;
  }
}

export { ListAllTrabalhosAcademicosUseCase };
