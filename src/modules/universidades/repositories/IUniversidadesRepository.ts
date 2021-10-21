import { Universidade } from "../entities/universidades";

interface IUniversidadeDTO {
  nome: string;
  cnpj: string;
}

interface IUniversidadeRepository {
  findByNome(nome: string): Promise<Universidade>;
  list(): Promise<Universidade[]>;
  create({ nome, cnpj }: IUniversidadeDTO): Promise<void>;
}

export { IUniversidadeDTO, IUniversidadeRepository };
