import { Universidade } from "../entities/universidades";

interface IUniversidadeDTO {
  id: number;
  nome: string;
  cnpj: string;
}

interface IUniversidadeRepository {
  findByCnpj(cnpj: string): Promise<Universidade>;
  list(): Promise<Universidade[]>;
  create({ id, nome, cnpj }: IUniversidadeDTO): Promise<void>;
  findMaxId(): Promise<number>;
}

export { IUniversidadeDTO, IUniversidadeRepository };
