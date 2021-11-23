import { NomeEmCitacaoBibliografica } from "../entities/nomecitabiblio";

interface INomeCitaBiblioRepositoryDTO {
  nome: string;
  autor_id: string;
}

interface INomeEmCitacaoBibliograficaRepository {
  create({ nome, autor_id }: INomeCitaBiblioRepositoryDTO): Promise<void>;
  findByAutorid(autor_id: string): Promise<NomeEmCitacaoBibliografica[]>;
  findByNome(nome: string): Promise<NomeEmCitacaoBibliografica>;
}

export { INomeEmCitacaoBibliograficaRepository, INomeCitaBiblioRepositoryDTO };
