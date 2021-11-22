import { inject, injectable } from "tsyringe";
import { Autores } from "../../entities/autores";
import { IAutoresRepository } from "../../repositories/IAutoresRepository";

@injectable()
class ListAutoresUseCase {
  constructor(
    @inject("AutoresRepository")
    private autoresRepository: IAutoresRepository
  ) {}

  async execute(): Promise<Autores[]> {
    const autores = await this.autoresRepository.list();

    return autores;
  }
}

export { ListAutoresUseCase };
