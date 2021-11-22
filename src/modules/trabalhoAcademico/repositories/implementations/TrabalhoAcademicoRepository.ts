import { getRepository, Repository } from "typeorm";
import { ITrabalhoAcademicoDTO } from "../../dtos/ITrabalhoAcademicoDTO";
import { TrabalhosAcademicos } from "../../entities/trabalhosAcademicos";
import { ITrabalhoAcademicoRepository } from "../ITrabalhoAcademicoRepository";

class TrabalhosAcademicosRepository implements ITrabalhoAcademicoRepository {
  private repository: Repository<TrabalhosAcademicos>;

  constructor() {
    this.repository = getRepository(TrabalhosAcademicos);
  }

  async findByTitulo(titulo: string): Promise<TrabalhosAcademicos> {
    const trabalho = await this.repository.findOne(titulo);
    return trabalho;
  }

  async create({
    id,
    titulo,
    tipo,
    nivel,
    localdoarquivo,
    localdepublicacao,
    areaestudoid,
  }: ITrabalhoAcademicoDTO): Promise<void> {
    const trabalho = this.repository.create({
      id,
      titulo,
      tipo,
      nivel,
      localdoarquivo,
      localdepublicacao,
      data: Date.now(),
      areaestudoid,
    });

    await this.repository.save(trabalho);
  }

  async listAll(): Promise<TrabalhosAcademicos[]> {
    const trabalhos = await this.repository.find();
    return trabalhos;
  }

  async listByArea(areaestudoid: string): Promise<TrabalhosAcademicos[]> {
    const trabalhos = await this.repository.find({ areaestudoid });
    return trabalhos;
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

export { TrabalhosAcademicosRepository };
