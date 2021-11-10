import { Dominio } from "../entities/dominio";

interface IDominiosDTO {
  dominio: string;
  universidadeid: number;
}

interface IDominioRepository {
  findeByNome(domino: string): Promise<Dominio>;
  list(): Promise<Dominio[]>;
  create({ dominio, universidadeid }: IDominiosDTO): Promise<void>;
}

export { IDominioRepository, IDominiosDTO };
