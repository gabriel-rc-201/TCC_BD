import { inject, injectable } from "tsyringe";
import { Dominio } from "../../../entities/dominio";
import { IDominioRepository } from "../../../repositories/IDominiosRepository";

@injectable()
class ListDominioUseCase {
  constructor(
    @inject("DominiosRepository")
    private dominioRepository: IDominioRepository
  ) {}

  async execute(): Promise<Dominio[]> {
    const dominios = await this.dominioRepository.list();

    return dominios;
  }
}

export { ListDominioUseCase };
