import { IAutoresDTO } from "../dtos/IAutoresDTO";
import { Autores } from "../entities/autores";

interface IAutoresRepository {
  create(data: IAutoresDTO): Promise<void>;
  findByEmail(email: string): Promise<Autores>;
  findMaxId(): Promise<number>;
}

export { IAutoresRepository };
