import { inject, injectable } from "tsyringe";
import { Universidade } from "../../../entities/universidades";
import { IUniversidadeRepository } from "../../../repositories/IUniversidadesRepository";

@injectable()
class ListUniversidadeUseCase {
  constructor(
    @inject("UniversidadeRepository")
    private universidadeRepository: IUniversidadeRepository
  ) {}

  async execute(): Promise<Universidade[]> {
    const universidades = await this.universidadeRepository.list();

    return universidades;
  }
}

export { ListUniversidadeUseCase };
