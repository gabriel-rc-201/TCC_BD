import { RelacaoAutorOrientador } from "../entities/relacaoAutorOrientador";

interface IRelacaoAutorOrientadorDTO {
  autor_id: string;
  orientador_id: string;
}

interface IRelacaoAutorOrientadorRepository {
  create({
    autor_id,
    orientador_id,
  }: IRelacaoAutorOrientadorDTO): Promise<void>;
  find({
    autor_id,
    orientador_id,
  }: IRelacaoAutorOrientadorDTO): Promise<RelacaoAutorOrientador>;
}

export { IRelacaoAutorOrientadorDTO, IRelacaoAutorOrientadorRepository };
