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
  async findById(id: string): Promise<Universidade> {
    const universidade = await this.repository.findOne(id);
    return universidade;
  }

  async findByCnpj(cnpj: string): Promise<Universidade> {
    const universidade = await this.repository.findOne({ cnpj });
    return universidade;
  }

  async list(): Promise<Universidade[]> {
    const universidades = await this.repository.find();
    return universidades;
  }

  async create({ id, nome, cnpj }: IUniversidadeDTO): Promise<void> {
    const universidade = this.repository.create({ id, nome, cnpj });

    await this.repository.save(universidade);
  }
}

export { UniversidadeRepository };
