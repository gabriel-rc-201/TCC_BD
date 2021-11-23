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

  async findById(id: string): Promise<Universidade> {
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
}

export { UniversidadesRepositoryInMemory };
