import { getRepository, Repository } from "typeorm";
import { Universidade } from "../../entities/universidades";
import {
  IUniversidadeDTO,
  IUniversidadeRepository,
} from "../IUniversidadesRepository";

class UniversidadeRepository implements IUniversidadeRepository {
  private repository: Repository<Universidade>;

  constructor() {
    this.repository = getRepository(Universidade);
  }
  async findById(id: number): Promise<Universidade> {
    const universidade = await this.repository.findOne(id);
    return universidade;
  }

  async findByCnpj(cnpj: string): Promise<Universidade> {
    const universidade = await this.repository.findOne({ cnpj });
    return universidade;
  }

  async list(): Promise<Universidade[]> {
    const universidades = await this.repository.find({
      select: ["nome", "cnpj"],
    });
    return universidades;
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

  async create({ id, nome, cnpj }: IUniversidadeDTO): Promise<void> {
    const universidade = this.repository.create({ id, nome, cnpj });

    await this.repository.save(universidade);
  }
}

export { UniversidadeRepository };
