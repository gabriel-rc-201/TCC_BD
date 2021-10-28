import { IAutoresDTO } from "../dtos/IAutoresDTO";
import { Autores } from "../entities/autores";

interface IAutoresRepository {
  create(data: IAutoresDTO): Promise<void>;
  findByMatricula(matricula: string): Promise<Autores>;
  findMaxId(): Promise<number>;
  list(): Promise<Autores[]>;
}

export { IAutoresRepository };
