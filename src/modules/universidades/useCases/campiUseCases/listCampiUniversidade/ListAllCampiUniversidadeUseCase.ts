import { inject, injectable } from "tsyringe";
import { Campus } from "../../../entities/campus";
import { ICampiRepository } from "../../../repositories/ICampiRepository";

@injectable()
class ListAllCampiUniversidadeUseCase {
  constructor(
    @inject("CampiRepository")
    private repository: ICampiRepository
  ) {}

  async execute(universidade_id: string): Promise<Campus[]> {
    const campi = await this.repository.listCampiUniversidade(universidade_id);

    return campi;
  }
}

export { ListAllCampiUniversidadeUseCase };
