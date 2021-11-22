import { getRepository, Repository } from "typeorm";
import { TrabalhoAutorOrientado } from "../../entities/trabalhoAutorOrientado";
import { ITrabalhoAutorOrientadorRepository } from "../ITrabalhoAutorOrientadorRepository";

class TrabalhoAutorOrientadorRepository
  implements ITrabalhoAutorOrientadorRepository
{
  private repository: Repository<TrabalhoAutorOrientado>;

  constructor() {
    this.repository = getRepository(TrabalhoAutorOrientado);
  }

  async find(trabalhoid: number): Promise<TrabalhoAutorOrientado> {
    const relacao = await this.repository.findOne(trabalhoid);
    return relacao;
  }

  async create(
    autorid: number,
    orientadorid: number,
    trabalhoacademicoid: number
  ): Promise<void> {
    const relacao = this.repository.create({
      autorid,
      orientadorid,
      trabalhoacademicoid,
    });

    await this.repository.save(relacao);
  }
}

export { TrabalhoAutorOrientadorRepository };
