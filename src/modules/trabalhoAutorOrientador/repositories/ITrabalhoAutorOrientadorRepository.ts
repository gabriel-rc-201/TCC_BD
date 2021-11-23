import { TrabalhoAutorOrientado } from "../entities/trabalhoAutorOrientado";

interface ITrabalhoAutorOrientadorRepository {
  find(trabalhoid: number): Promise<TrabalhoAutorOrientado>;
  create(
    autor_id: number,
    orientadorid: number,
    trabalhoacademicoid: number
  ): Promise<void>;
}

export { ITrabalhoAutorOrientadorRepository };
