import { Curso } from "../entities/curso";

interface ICursoDTO {
  id: Number;
  nome: string;
  campusid: Number;
  universidadeid: Number;
  turno: "diurno" | "noturno" | "integral";
  modalidade: "licenciatura" | "bacharelado" | "bacharelado e licenciatura";
}

interface ICursoRepository {
  create(curso: ICursoDTO): Promise<void>;
  listCursoCampus(campusid: Number): Promise<Curso[]>;
  listCursoUniversidade(universidadeid: Number): Promise<Curso[]>;
  findByNome(): Promise<Curso>;
  findMaxId(): Promise<number>;
}

export { ICursoRepository, ICursoDTO };
