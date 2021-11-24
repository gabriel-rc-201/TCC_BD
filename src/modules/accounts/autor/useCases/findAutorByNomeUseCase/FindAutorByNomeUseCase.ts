import { inject, injectable } from "tsyringe";
import { Autores } from "../../entities/autores";
import { IAutoresRepository } from "../../repositories/IAutoresRepository";

@injectable()
class FindAutorByMatricualaUseCase {
  constructor(
    @inject("AutoresRepository")
    private repository: IAutoresRepository
  ) {}

  async execute(matricuala: string): Promise<Autores> {
    const trabalho = await this.repository.findByMatricula(matricuala);
    return trabalho;
  }
}

export { FindAutorByMatricualaUseCase };
