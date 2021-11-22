import { inject, injectable } from "tsyringe";
import { TrabalhosAcademicos } from "../../entities/trabalhosAcademicos";
import { ITrabalhoAcademicoRepository } from "../../repositories/ITrabalhoAcademicoRepository";

@injectable()
class ListTrabalhoByNome {
  constructor(
    @inject("TrabalhoAcademico")
    private repository: ITrabalhoAcademicoRepository
  ) {}

  async execute(titulo: string): Promise<TrabalhosAcademicos> {
    const trabalho = await this.repository.findByTitulo(titulo);
    return trabalho;
  }
}

export { ListTrabalhoByNome };
