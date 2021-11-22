import { Universidade } from "../../entities/universidades";
import {
  IUniversidadeDTO,
  IUniversidadeRepository,
} from "../IUniversidadesRepository";

class UniversidadesRepositoryInMemory implements IUniversidadeRepository {
  universidade: Universidade[] = [];

  async findByCnpj(cnpj: string): Promise<Universidade> {
    const universidade = this.universidade.find(
      (universidade) => universidade.cnpj === cnpj
    );
    return universidade;
  }

  async findById(id: number): Promise<Universidade> {
    return this.universidade.find((universidade) => universidade.id === id);
  }

  async list(): Promise<Universidade[]> {
    return this.universidade;
  }

  async create({ id, nome, cnpj }: IUniversidadeDTO): Promise<void> {
    const universidade = new Universidade();

    Object.assign(universidade, {
      id,
      nome,
      cnpj,
    });

    this.universidade.push(universidade);
  }

  async findMaxId(): Promise<number> {
    const ids = this.universidade;

    if (ids.length === 0) return 0;

    const idNumber = ids[ids.length - 1].id;
    const idString = idNumber.toString();

    const id = parseInt(idString);

    return id;
  }
}

export { UniversidadesRepositoryInMemory };
