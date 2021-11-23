import { getRepository, Repository } from "typeorm";
import { ITrabalhoAcademicoDTO } from "../../dtos/ITrabalhoAcademicoDTO";
import { TrabalhosAcademicos } from "../../entities/trabalhosAcademicos";
import { ITrabalhoAcademicoRepository } from "../ITrabalhoAcademicoRepository";

class TrabalhosAcademicosRepository implements ITrabalhoAcademicoRepository {
  private repository: Repository<TrabalhosAcademicos>;

  constructor() {
    this.repository = getRepository(TrabalhosAcademicos);
  }

  async findById(id: string): Promise<TrabalhosAcademicos> {
    const trabalho = await this.repository.findOne(id);
    return trabalho;
  }

  async findByTitulo(titulo: string): Promise<TrabalhosAcademicos> {
    const trabalho = await this.repository.findOne({ titulo });
    return trabalho;
  }

  async create({
    id,
    titulo,
    tipo,
    nivel,
    local_arquivo,
    local_publicacao,
    area_estudo_id,
    data_publicacao,
  }: ITrabalhoAcademicoDTO): Promise<void> {
    const trabalho = this.repository.create({
      id,
      titulo,
      tipo,
      nivel,
      local_arquivo,
      local_publicacao,
      data_publicacao,
      area_estudo_id,
    });

    await this.repository.save(trabalho);
  }

  async listAll(): Promise<TrabalhosAcademicos[]> {
    const trabalhos = await this.repository.find();
    return trabalhos;
  }

  async listByArea(area_estudo_id: string): Promise<TrabalhosAcademicos[]> {
    const trabalhos = await this.repository.find({ area_estudo_id });
    return trabalhos;
  }
}

export { TrabalhosAcademicosRepository };
