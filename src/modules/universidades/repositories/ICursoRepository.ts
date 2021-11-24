import { Curso, Modalidade, Turno } from "../entities/curso";

interface ICursoDTO {
  id?: string;
  nome: string;
  campus_id: string;
  universidade_id: string;
  turno: Turno;
  modalidade: Modalidade;
}

interface ICursoRepository {
  create(curso: ICursoDTO): Promise<void>;
  listCursoCampus(campus_id: string): Promise<Curso[]>;
  listCursoUniversidade(universidade_id: string): Promise<Curso[]>;
  findByNome(nome: string): Promise<Curso[]>;
  findById(
    id: string,
    campus_id: string,
    universidade_id: string
  ): Promise<Curso>;
  findEspecificCourse(
    nome: string,
    turno: Turno,
    modalidade: Modalidade
  ): Promise<Curso[]>;
}

export { ICursoRepository, ICursoDTO };
