import { RelacaoAutorCurso } from "../entities/relacaoAutorCurso";

interface IRealacaoAutorCursoDTO {
  autor_id: string;
  curso_id: string;
  campus_id: string;
  universidade_id: string;
  data_inicio?: Date;
  data_fim?: Date;
}

interface IRelacaoAutorCursoRepository {
  create(relacao: IRealacaoAutorCursoDTO): Promise<void>;
  find({
    autor_id,
    curso_id,
    campus_id,
    universidade_id,
  }: IRealacaoAutorCursoDTO): Promise<RelacaoAutorCurso>;
}

export { IRelacaoAutorCursoRepository, IRealacaoAutorCursoDTO };
