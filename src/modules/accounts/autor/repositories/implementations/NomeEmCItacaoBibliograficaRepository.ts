import { getRepository, Repository } from "typeorm";
import { NomeEmCitacaoBibliografica } from "../../entities/nomecitabiblio";
import {
  INomeCitaBiblioRepositoryDTO,
  INomeEmCitacaoBibliograficaRepository,
} from "../INomeEmCitacaoBibliograficaRepository";

class NomeEmCitacaoBibliograficaRepository
  implements INomeEmCitacaoBibliograficaRepository
{
  private repository: Repository<NomeEmCitacaoBibliografica>;

  constructor() {
    this.repository = getRepository(NomeEmCitacaoBibliografica);
  }

  async create({ nome, autorid }: INomeCitaBiblioRepositoryDTO): Promise<void> {
    const nome_ = this.repository.create({ nome, autorid });
    await this.repository.save(nome_);
  }
  async findByAutorid(autorid: number): Promise<NomeEmCitacaoBibliografica[]> {
    const nomes = await this.repository.find({ autorid });
    return nomes;
  }
}

export { NomeEmCitacaoBibliograficaRepository };
