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

  findByNome(nome: string): Promise<NomeEmCitacaoBibliografica> {
    const nome_ = this.repository.findOne({ nome });
    return nome_;
  }

  async create({
    nome,
    autor_id,
  }: INomeCitaBiblioRepositoryDTO): Promise<void> {
    const nome_ = this.repository.create({ nome, autor_id });
    await this.repository.save(nome_);
  }

  async findByAutorid(autor_id: string): Promise<NomeEmCitacaoBibliografica[]> {
    const nomes = await this.repository.find({ autor_id });
    return nomes;
  }
}

export { NomeEmCitacaoBibliograficaRepository };
