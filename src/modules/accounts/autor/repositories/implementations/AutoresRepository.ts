import { getRepository, Repository } from "typeorm";
import { IAutoresDTO } from "../../dtos/IAutoresDTO";
import { Autores } from "../../entities/autores";
import { IAutoresRepository } from "../IAutoresRepository";

class AutoresRepository implements IAutoresRepository {
  private repository: Repository<Autores>;

  constructor() {
    this.repository = getRepository(Autores);
  }

  async findById(id: number): Promise<Autores> {
    const autor = await this.repository.findOne(id);
    return autor;
  }

  async list(): Promise<Autores[]> {
    const autores = await this.repository.find({
      select: ["nome", "email"],
    });

    return autores;
  }

  async create({
    id,
    email,
    nome,
    senha,
    matricula,
  }: IAutoresDTO): Promise<void> {
    const user = this.repository.create({ id, email, nome, senha, matricula });

    await this.repository.save(user);
  }

  async findByMatricula(matricula: string): Promise<Autores> {
    const autor = await this.repository.findOne({ matricula });

    return autor;
  }
}

export { AutoresRepository };
