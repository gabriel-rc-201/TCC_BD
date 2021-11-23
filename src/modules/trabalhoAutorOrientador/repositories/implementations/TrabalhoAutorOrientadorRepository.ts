import { getRepository, Repository } from "typeorm";
import { TrabalhoAutorOrientado } from "../../entities/trabalhoAutorOrientado";
import {
  IRelacao,
  ITrabalhoAutorOrientadorRepository,
} from "../ITrabalhoAutorOrientadorRepository";

class TrabalhoAutorOrientadorRepository
  implements ITrabalhoAutorOrientadorRepository
{
  private repository: Repository<TrabalhoAutorOrientado>;

  constructor() {
    this.repository = getRepository(TrabalhoAutorOrientado);
  }

  async find({
    autor_id,
    orientador_id,
    trabalho_academico_id,
  }: IRelacao): Promise<TrabalhoAutorOrientado> {
    const relacao = await this.repository.findOne({
      autor_id,
      orientador_id,
      trabalho_academico_id,
    });
    return relacao;
  }

  async create({
    autor_id,
    orientador_id,
    trabalho_academico_id,
  }: IRelacao): Promise<void> {
    const relacao = this.repository.create({
      autor_id,
      orientador_id,
      trabalho_academico_id,
    });

    await this.repository.save(relacao);
  }
}

export { TrabalhoAutorOrientadorRepository };
