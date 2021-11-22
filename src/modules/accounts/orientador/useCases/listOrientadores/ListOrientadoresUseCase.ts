import { inject, injectable } from "tsyringe";
import { Orientadores } from "../../entities/orientadores";
import { IOrientadoresRepository } from "../../repositories/IOrientadoresRepository";

@injectable()
class ListOrientadoresUseCase {
  constructor(
    @inject("OrientadoresRepository")
    private orientadorRepository: IOrientadoresRepository
  ) {}

  async execute(): Promise<Orientadores[]> {
    const orientadores = await this.orientadorRepository.list();

    return orientadores;
  }
}

export { ListOrientadoresUseCase };
