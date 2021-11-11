import { Campus } from "../entities/campus";

interface ICampusDTO {
  id: Number;
  nome: string;
  universidadeid: Number;
}

interface ICampiRepository {
  listCampiUniversidade(universidadeid: Number): Promise<Campus[]>;
  findByNome(nome: string): Promise<Campus>;
  findById(id: number): Promise<Campus>;
  create({ id, nome, universidadeid }: ICampusDTO): Promise<void>;
  findMaxId(): Promise<number>;
}

export { ICampiRepository, ICampusDTO };
