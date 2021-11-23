import { IOrientadoresDTO } from "../dtos/IOrientadoresDTO";
import { Orientadores } from "../entities/orientadores";

interface IOrientadoresRepository {
  create(data: IOrientadoresDTO): Promise<void>;
  findByMatricula(matricula_siape: string): Promise<Orientadores>;
  findById(id: string): Promise<Orientadores>;
  list(): Promise<Orientadores[]>;
}

export { IOrientadoresRepository };
