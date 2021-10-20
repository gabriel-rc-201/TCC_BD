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

  async findById(id: Number): Promise<Universidade> {
    const universidade = await this.repository.findOne({ id });
    return universidade;
  }

  async list(): Promise<Universidade[]> {
    const universidades = await this.repository.find();
    return universidades;
  }

  async findMaxId(): Promise<number> {
    const ids = await this.repository.find({
      select: ["id"],
      order: { id: "DESC" },
      take: 1,
    });

    const idNumber = ids[0].id;

    let idString = idNumber.toString();
    let id = parseInt(idString);

    return id;
  }

  async create({ nome, cnpj }: IUniversidadeDTO): Promise<void> {
    const id = parseInt((await this.findMaxId()).toString()) + 1;

    const universidade = this.repository.create({ id, nome, cnpj });

    await this.repository.save(universidade);
  }
}

export { UniversidadeRepository };
