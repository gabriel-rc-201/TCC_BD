import { Dominio } from "../entities/dominio";

interface IDominiosDTO {
  dominio: string;
  universidade_id: string;
}

interface IDominioRepository {
  findeByNome(domino: string): Promise<Dominio>;
  list(): Promise<Dominio[]>;
  create({ dominio, universidade_id }: IDominiosDTO): Promise<void>;
}

export { IDominioRepository, IDominiosDTO };
