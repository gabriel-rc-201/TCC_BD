import { inject, injectable } from "tsyringe";
import { Campus } from "../../../entities/campus";
import { ICampiRepository } from "../../../repositories/ICampiRepository";

@injectable()
class ListAllCampiUniversidadeUseCase {
  constructor(
    @inject("CampiRepository")
    private repository: ICampiRepository
  ) {}

  async execute(universidadeid: number): Promise<Campus[]> {
    const campi = await this.repository.listCampiUniversidade(universidadeid);

    return campi;
  }
}

export { ListAllCampiUniversidadeUseCase };
