import { IOrientadoresDTO } from "../dtos/IOrientadoresDTO";
import { Orientadores } from "../entities/orientadores";

interface IOrientadoresRepository {
  create(data: IOrientadoresDTO): Promise<void>;
  findByMatricula(matricula_siape: string): Promise<Orientadores>;
  findMaxId(): Promise<number>;
  list(): Promise<Orientadores[]>;
}

export { IOrientadoresRepository };
