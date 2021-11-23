import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListAllCampiUniversidadeUseCase } from "./ListAllCampiUniversidadeUseCase";

class ListAllCampiUniversidadeController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { universidade_id } = req.body;

    const listAllCampiUniversidadeUseCase = container.resolve(
      ListAllCampiUniversidadeUseCase
    );

    const all = await listAllCampiUniversidadeUseCase.execute(universidade_id);

    return res.json(all);
  }
}

export { ListAllCampiUniversidadeController };
