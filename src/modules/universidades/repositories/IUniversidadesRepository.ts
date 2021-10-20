import { Universidade } from "../entities/universidades";

interface IUniversidadeDTO {
  nome: string;
  cnpj: string;
}

interface IUniversidadeRepository {
  findById(id: Number): Promise<Universidade>;
  list(): Promise<Universidade[]>;
  create({ nome, cnpj }: IUniversidadeDTO): Promise<void>;
}

export { IUniversidadeDTO, IUniversidadeRepository };
