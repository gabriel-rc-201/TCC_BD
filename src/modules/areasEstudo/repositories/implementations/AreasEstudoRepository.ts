import { getRepository, Repository } from "typeorm";
import { AreaEstudo } from "../../entities/areasEstudo";
import {
  IAreaEstudoRepository,
  ICreateAreaEstudoDTO,
} from "../IAreasEstudoRepository";

class AreasEstudoRepository implements IAreaEstudoRepository {
  private repository: Repository<AreaEstudo>;

  constructor() {
    this.repository = getRepository(AreaEstudo);
  }

  async findById(id: string): Promise<AreaEstudo> {
    const areaEstudo = await this.repository.findOne({ id });
    return areaEstudo;
  }

  async list(): Promise<AreaEstudo[]> {
    const areasEstudos = await this.repository.find();
    return areasEstudos;
  }

  async create({ id, name }: ICreateAreaEstudoDTO): Promise<void> {
    const areaEstudo = this.repository.create({ id, name });
    await this.repository.save(areaEstudo);
  }
}

export { AreasEstudoRepository };
