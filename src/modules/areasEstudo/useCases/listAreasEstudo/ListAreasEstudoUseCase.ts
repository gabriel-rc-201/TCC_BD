import { inject, injectable } from "tsyringe";
import { AreaEstudo } from "../../entities/areasEstudo";
import { IAreaEstudoRepository } from "../../repositories/IAreasEstudoRepository";

@injectable()
class ListAreasEstudoUseCase {
  constructor(
    @inject("AreasEstudoRepository")
    private areasEstudoRepository: IAreaEstudoRepository
  ) {}

  async execute(): Promise<AreaEstudo[]> {
    const areasEstudo = await this.areasEstudoRepository.list();

    return areasEstudo;
  }
}

export { ListAreasEstudoUseCase };
