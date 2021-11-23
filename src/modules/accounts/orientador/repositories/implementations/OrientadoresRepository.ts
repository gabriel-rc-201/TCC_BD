import { getRepository, Repository } from "typeorm";
import { IOrientadoresDTO } from "../../dtos/IOrientadoresDTO";
import { Orientadores } from "../../entities/orientadores";
import { IOrientadoresRepository } from "../IOrientadoresRepository";

class OrientadoresRepository implements IOrientadoresRepository {
  private repository: Repository<Orientadores>;

  constructor() {
    this.repository = getRepository(Orientadores);
  }

  findById(id: string): Promise<Orientadores> {
    const orientador = this.repository.findOne(id);
    return orientador;
  }

  list(): Promise<Orientadores[]> {
    const orientadores = this.repository.find({
      select: ["nome", "email"],
    });

    return orientadores;
  }

  async create({
    id,
    email,
    nome,
    senha,
    matricula_siape,
  }: IOrientadoresDTO): Promise<void> {
    const user = this.repository.create({
      id,
      email,
      nome,
      senha,
      matricula_siape,
    });

    await this.repository.save(user);
  }

  async findByMatricula(matricula_siape: string): Promise<Orientadores> {
    const orientador = await this.repository.findOne({ matricula_siape });

    return orientador;
  }
}

export { OrientadoresRepository };
