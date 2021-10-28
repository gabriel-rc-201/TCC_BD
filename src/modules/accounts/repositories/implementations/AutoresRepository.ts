import { getRepository, Repository } from "typeorm";
import { IAutoresDTO } from "../../dtos/IAutoresDTO";
import { Autores } from "../../entities/autores";
import { IAutoresRepository } from "../IAutoresRepository";

class AutoresRepository implements IAutoresRepository {
  private repository: Repository<Autores>;

  constructor() {
    this.repository = getRepository(Autores);
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

  async findByEmail(email: string): Promise<Autores> {
    const autor = await this.repository.findOne({ email });

    return autor;
  }

  async findMaxId(): Promise<number> {
    const ids = await this.repository.find({
      select: ["id"],
      order: { id: "DESC" },
      take: 1,
    });

    if (ids.length === 0) return 0;

    const idNumber = ids[0].id;

    let idString = idNumber.toString();
    let id = parseInt(idString);

    return id;
  }
}

export { AutoresRepository };
