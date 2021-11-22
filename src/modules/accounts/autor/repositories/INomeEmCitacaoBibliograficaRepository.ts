import { NomeEmCitacaoBibliografica } from "../entities/nomecitabiblio";

interface INomeCitaBiblioRepositoryDTO {
  nome: string;
  autorid: number;
}

interface INomeEmCitacaoBibliograficaRepository {
  create({ nome, autorid }: INomeCitaBiblioRepositoryDTO): Promise<void>;
  findByAutorid(autorid: number): Promise<NomeEmCitacaoBibliografica[]>;
  findByNome(nome: string): Promise<NomeEmCitacaoBibliografica>;
}

export { INomeEmCitacaoBibliograficaRepository, INomeCitaBiblioRepositoryDTO };
