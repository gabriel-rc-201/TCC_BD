import { getRepository, Repository } from "typeorm";
import { Campus } from "../../entities/campus";
import { ICampiRepository, ICampusDTO } from "../ICampiRepository";

class CampiRepository implements ICampiRepository {
  private repository: Repository<Campus>;

  constructor() {
    this.repository = getRepository(Campus);
  }

  async findById(id: number): Promise<Campus> {
    const campus = await this.repository.findOne({ id });
    return campus;
  }

  async listCampiUniversidade(universidadeid: Number): Promise<Campus[]> {
    const campi = await this.repository.find({ universidadeid });
    return campi;
  }

  async findByNome(nome: string): Promise<Campus> {
    const campus = await this.repository.findOne({ nome });
    return campus;
  }

  async create({ id, nome, universidadeid }: ICampusDTO): Promise<void> {
    const campus = this.repository.create({ id, nome, universidadeid });
    await this.repository.save(campus);
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

export { CampiRepository };
