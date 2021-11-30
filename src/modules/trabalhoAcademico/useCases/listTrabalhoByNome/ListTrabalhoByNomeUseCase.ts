import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppErros";
import { TrabalhosAcademicos } from "../../entities/trabalhosAcademicos";
import { ITrabalhoAcademicoRepository } from "../../repositories/ITrabalhoAcademicoRepository";

@injectable()
class ListTrabalhoByNomeUseCase {
  constructor(
    @inject("TrabalhoAcademico")
    private repository: ITrabalhoAcademicoRepository
  ) {}

  async execute(titulo: string): Promise<TrabalhosAcademicos> {
    const trabalho = await this.repository.findByTitulo(titulo);

    if (!trabalho) throw new AppError("trabalho não encontrado", 404);

    return trabalho;
  }
}

export { ListTrabalhoByNomeUseCase };
