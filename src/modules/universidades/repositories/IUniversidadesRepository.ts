import { Universidade } from "../entities/universidades";

interface IUniversidadeDTO {
  id?: string;
  nome: string;
  cnpj: string;
}

interface IUniversidadeRepository {
  findByCnpj(cnpj: string): Promise<Universidade>;
  findById(id: string): Promise<Universidade>;
  list(): Promise<Universidade[]>;
  create({ id, nome, cnpj }: IUniversidadeDTO): Promise<void>;
}

export { IUniversidadeDTO, IUniversidadeRepository };
