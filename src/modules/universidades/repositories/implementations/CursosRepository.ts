import { getRepository, Repository } from "typeorm";
import { Curso, Modalidade, Turno } from "../../entities/curso";
import { ICursoDTO, ICursoRepository } from "../ICursoRepository";

class CursosRepository implements ICursoRepository {
  private repository: Repository<Curso>;

  constructor() {
    this.repository = getRepository(Curso);
  }
  async findEspecificCourse(
    nome: string,
    turno: Turno,
    modalidade: Modalidade
  ): Promise<Curso> {
    const curso = this.repository.findOne({ nome, turno, modalidade });
    return curso;
  }

  async create(curso: ICursoDTO): Promise<void> {
    const { id, campus_id, universidade_id, nome, modalidade, turno } = curso;

    const newCurso = this.repository.create({
      id,
      campus_id,
      universidade_id,
      nome,
      modalidade,
      turno,
    });

    await this.repository.save(newCurso);
  }

  async listCursoCampus(campus_id: string): Promise<Curso[]> {
    const cursos = await this.repository.find({ campus_id });
    return cursos;
  }

  async listCursoUniversidade(universidade_id: string): Promise<Curso[]> {
    const cursos = await this.repository.find({ universidade_id });
    return cursos;
  }

  async findByNome(nome: string): Promise<Curso[]> {
    const cursos = await this.repository.find({ nome });
    return cursos;
  }
}

export { CursosRepository };
