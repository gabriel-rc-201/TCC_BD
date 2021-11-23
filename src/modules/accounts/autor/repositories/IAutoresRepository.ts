import { IAutoresDTO } from "../dtos/IAutoresDTO";
import { Autores } from "../entities/autores";

interface IAutoresRepository {
  create(data: IAutoresDTO): Promise<void>;
  findByMatricula(matricula: string): Promise<Autores>;
  findById(id: number): Promise<Autores>;
  list(): Promise<Autores[]>;
}

export { IAutoresRepository };
