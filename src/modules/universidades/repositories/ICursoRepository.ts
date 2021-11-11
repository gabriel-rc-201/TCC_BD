import { Curso } from "../entities/curso";

interface ICursoDTO {
  id: Number;
  nome: string;
  campusid: number;
  universidadeid: number;
  turno: "diurno" | "noturno" | "integral";
  modalidade: "licenciatura" | "bacharelado" | "bacharelado e licenciatura";
}

interface ICursoRepository {
  create(curso: ICursoDTO): Promise<void>;
  listCursoCampus(campusid: number): Promise<Curso[]>;
  listCursoUniversidade(universidadeid: number): Promise<Curso[]>;
  findByNome(nome: string): Promise<Curso[]>;
  findEspecificCourse(
    nome: string,
    turno: "diurno" | "noturno" | "integral",
    modalidade: "licenciatura" | "bacharelado" | "bacharelado e licenciatura"
  ): Promise<Curso>;
  findMaxId(): Promise<number>;
}

export { ICursoRepository, ICursoDTO };
