import { getRepository, Repository } from "typeorm";
import { Curso } from "../../entities/curso";
import { ICursoDTO, ICursoRepository } from "../ICursoRepository";

class CursosRepository implements ICursoRepository {
  private repository: Repository<Curso>;

  constructor() {
    this.repository = getRepository(Curso);
  }
  async findEspecificCourse(
    nome: string,
    turno: "diurno" | "noturno" | "integral",
    modalidade: "licenciatura" | "bacharelado" | "bacharelado e licenciatura"
  ): Promise<Curso> {
    const curso = this.repository.findOne({ nome, turno, modalidade });
    return curso;
  }

  async create(curso: ICursoDTO): Promise<void> {
    const { id, campusid, universidadeid, nome, modalidade, turno } = curso;

    const newCurso = this.repository.create({
      id,
      campusid,
      universidadeid,
      nome,
      modalidade,
      turno,
    });

    await this.repository.save(newCurso);
  }

  async listCursoCampus(campusid: Number): Promise<Curso[]> {
    const cursos = await this.repository.find({ campusid });
    return cursos;
  }

  async listCursoUniversidade(universidadeid: Number): Promise<Curso[]> {
    const cursos = await this.repository.find({ universidadeid });
    return cursos;
  }

  async findByNome(nome: string): Promise<Curso[]> {
    const cursos = await this.repository.find({ nome });
    return cursos;
  }

  async findMaxId(): Promise<number> {
    const ids = await this.repository.find({
      select: ["id"],
      order: { id: "DESC" },
      take: 1,
    });

    if (ids.length === 0) return 0;

    const idNumber = ids[0].id;

    let idString = idNumber.toString();
    let id = parseInt(idString);

    return id;
  }
}

export { CursosRepository };
