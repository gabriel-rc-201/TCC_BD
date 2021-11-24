import { getRepository, Repository } from "typeorm";
import { RelacaoAutorCurso } from "../../entities/relacaoAutorCurso";
import {
  IRealacaoAutorCursoDTO,
  IRelacaoAutorCursoRepository,
} from "../IRelacaoAutorCursoRepository";

class RelacaoAutorCursoRepository implements IRelacaoAutorCursoRepository {
  private repository: Repository<RelacaoAutorCurso>;
  constructor() {
    this.repository = getRepository(RelacaoAutorCurso);
  }

  async create({
    autor_id,
    campus_id,
    curso_id,
    universidade_id,
    data_inicio,
    data_fim,
  }: IRealacaoAutorCursoDTO): Promise<void> {
    const relacao = this.repository.create({
      autor_id,
      campus_id,
      curso_id,
      universidade_id,
      data_inicio,
      data_fim,
    });

    await this.repository.save(relacao);
  }
  async find({
    autor_id,
    curso_id,
    campus_id,
    universidade_id,
  }: IRealacaoAutorCursoDTO): Promise<RelacaoAutorCurso> {
    const relacao = await this.repository.findOne({
      autor_id,
      curso_id,
      campus_id,
      universidade_id,
    });

    return relacao;
  }
}

export { RelacaoAutorCursoRepository };
