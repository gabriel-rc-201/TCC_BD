import { Campus } from "../entities/campus";

interface ICampusDTO {
  id?: string;
  nome?: string;
  universidade_id: string;
}

interface ICampiRepository {
  listCampiUniversidade(universidade_id: string): Promise<Campus[]>;
  findByNome(nome: string): Promise<Campus>;
  findById({ id, universidade_id }: ICampusDTO): Promise<Campus>;
  create({ id, nome, universidade_id }: ICampusDTO): Promise<void>;
}

export { ICampiRepository, ICampusDTO };
