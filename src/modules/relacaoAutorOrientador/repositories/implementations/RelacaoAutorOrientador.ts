import { getRepository, Repository } from "typeorm";
import { RelacaoAutorOrientador } from "../../entities/relacaoAutorOrientador";
import {
  IRelacaoAutorOrientadorDTO,
  IRelacaoAutorOrientadorRepository,
} from "../IRelacaoAutorOrientador";

class RelacaoAutorOrientadorRepository
  implements IRelacaoAutorOrientadorRepository
{
  private repository: Repository<RelacaoAutorOrientador>;
  constructor() {
    this.repository = getRepository(RelacaoAutorOrientador);
  }

  async create({
    autor_id,
    orientador_id,
  }: IRelacaoAutorOrientadorDTO): Promise<void> {
    const relacao = this.repository.create({ autor_id, orientador_id });
    await this.repository.save(relacao);
  }

  async find({
    autor_id,
    orientador_id,
  }: IRelacaoAutorOrientadorDTO): Promise<RelacaoAutorOrientador> {
    const relacao = await this.repository.findOne({ autor_id, orientador_id });
    return relacao;
  }
}

export { RelacaoAutorOrientadorRepository };
