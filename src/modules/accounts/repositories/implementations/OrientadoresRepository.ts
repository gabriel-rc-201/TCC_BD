import { getRepository, Repository } from "typeorm";
import { IOrientadoresDTO } from "../../dtos/IOrientadoresDTO";
import { Orientadores } from "../../entities/orientadores";
import { IOrientadoresRepository } from "../IOrientadoresRepository";

class OrientadoresRepository implements IOrientadoresRepository {
  private repository: Repository<Orientadores>;

  constructor() {
    this.repository = getRepository(Orientadores);
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

export { OrientadoresRepository };
