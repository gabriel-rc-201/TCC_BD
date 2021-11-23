import { TrabalhoAutorOrientado } from "../entities/trabalhoAutorOrientado";

interface IRelacao {
  autor_id: string;
  orientador_id: string;
  trabalho_academico_id: string;
}

interface ITrabalhoAutorOrientadorRepository {
  find({
    autor_id,
    orientador_id,
    trabalho_academico_id,
  }: IRelacao): Promise<TrabalhoAutorOrientado>;
  create({
    autor_id,
    orientador_id,
    trabalho_academico_id,
  }: IRelacao): Promise<void>;
}

export { ITrabalhoAutorOrientadorRepository, IRelacao };
