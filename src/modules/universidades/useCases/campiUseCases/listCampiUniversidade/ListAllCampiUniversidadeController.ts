import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListAllCampiUniversidadeUseCase } from "./ListAllCampiUniversidadeUseCase";

class ListAllCampiUniversidadeController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { universidadeid } = req.body;

    const listAllCampiUniversidadeUseCase = container.resolve(
      ListAllCampiUniversidadeUseCase
    );

    const all = listAllCampiUniversidadeUseCase.execute(universidadeid);

    return res.json(all);
  }
}

export { ListAllCampiUniversidadeController };
