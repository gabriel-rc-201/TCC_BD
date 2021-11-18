import { getRepository, Repository } from "typeorm";
import { Dominio } from "../../entities/dominio";
import { IDominioRepository, IDominiosDTO } from "../IDominiosRepository";

class DominiosRepository implements IDominioRepository {
  private repository: Repository<Dominio>;

  constructor() {
    this.repository = getRepository(Dominio);
  }

  async findeByNome(nome: string): Promise<Dominio> {
    const dominio = await this.repository.findOne({ doninio: nome });
    return dominio;
  }

  async list(): Promise<Dominio[]> {
    const dominios = await this.repository.find();
    return dominios;
  }

  async create({ dominio, universidadeid }: IDominiosDTO): Promise<void> {
    const newDomain = this.repository.create({
      doninio: dominio,
      universidadeid,
    });
    await this.repository.save(newDomain);
  }
}

export { DominiosRepository };
