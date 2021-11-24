import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppErros";
import { ICursoRepository } from "../../../universidades/repositories/ICursoRepository";
import {
  IRealacaoAutorCursoDTO,
  IRelacaoAutorCursoRepository,
} from "../../repositories/IRelacaoAutorCursoRepository";

@injectable()
class CreateRelacaoAutorCursoUseCase {
  constructor(
    @inject("RelacaoAutorCurso")
    private relacaoRepository: IRelacaoAutorCursoRepository,

    @inject("CursosRepository")
    private cursoRepository: ICursoRepository
  ) {}

  async execute({
    autor_id,
    campus_id,
    curso_id,
    universidade_id,
    data_inicio,
    data_fim,
  }: IRealacaoAutorCursoDTO): Promise<void> {
    const cursoExists = await this.cursoRepository.findById(
      curso_id,
      campus_id,
      universidade_id
    );
    if (!cursoExists)
      throw new AppError(
        "curso não encontrado, falha ao registrar a relação entre autor e curso"
      );

    const relacaoExists = await this.relacaoRepository.find({
      autor_id,
      campus_id,
      universidade_id,
      curso_id,
    });
    if (relacaoExists)
      throw new AppError(
        "essa relação ja existe, falha ao registrar a relação entre autor e curso"
      );

    await this.relacaoRepository.create({
      autor_id,
      campus_id,
      curso_id,
      universidade_id,
      data_inicio,
      data_fim,
    });
  }
}

export { CreateRelacaoAutorCursoUseCase };
