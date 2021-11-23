import { getRepository, Repository } from "typeorm";
import { Campus } from "../../entities/campus";
import { ICampiRepository, ICampusDTO } from "../ICampiRepository";

class CampiRepository implements ICampiRepository {
  private repository: Repository<Campus>;

  constructor() {
    this.repository = getRepository(Campus);
  }

  async findById({ id, universidade_id }: ICampusDTO): Promise<Campus> {
    const campus = await this.repository.findOne({ id, universidade_id });
    return campus;
  }

  async listCampiUniversidade(universidade_id: string): Promise<Campus[]> {
    const campi = await this.repository.find({
      where: { universidade_id: universidade_id },
    });
    return campi;
  }

  async findByNome(nome: string): Promise<Campus> {
    const campus = await this.repository.findOne({ nome });
    return campus;
  }

  async create({ id, nome, universidade_id }: ICampusDTO): Promise<void> {
    const campus = this.repository.create({ id, nome, universidade_id });
    await this.repository.save(campus);
  }
}

export { CampiRepository };
