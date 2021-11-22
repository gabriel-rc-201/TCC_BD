import { TrabalhoAutorOrientado } from "../entities/trabalhoAutorOrientado";

interface ITrabalhoAutorOrientadorRepository {
  find(trabalhoid: number): Promise<TrabalhoAutorOrientado>;
  create(
    autorid: number,
    orientadorid: number,
    trabalhoacademicoid: number
  ): Promise<void>;
}

export { ITrabalhoAutorOrientadorRepository };
