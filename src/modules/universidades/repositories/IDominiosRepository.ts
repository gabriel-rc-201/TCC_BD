import { Dominio } from "../entities/dominio";

interface IDominiosDTO {
  nome: string;
  universidadeid: number;
}

interface IDominioRepository {
  findeByNome(nome: string): Promise<Dominio>;
  list(): Promise<Dominio[]>;
  create({ nome, universidadeid }: IDominiosDTO): Promise<void>;
}

export { IDominioRepository, IDominiosDTO };
