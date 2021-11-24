import { inject, injectable } from "tsyringe";
import { Dominio } from "../../../entities/dominio";
import { IDominioRepository } from "../../../repositories/IDominiosRepository";

@injectable()
class FindDomainUseCase {
  constructor(
    @inject("DominiosRepository")
    private dominioRepository: IDominioRepository
  ) {}

  async execute(dominio: string): Promise<Dominio> {
    const dominio_ = await this.dominioRepository.findeByNome(dominio);

    return dominio_;
  }
}

export { FindDomainUseCase };
