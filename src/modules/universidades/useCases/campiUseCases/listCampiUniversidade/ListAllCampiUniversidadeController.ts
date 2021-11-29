import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListAllCampiUniversidadeUseCase } from "./ListAllCampiUniversidadeUseCase";

class ListAllCampiUniversidadeController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { universidade_id } = req.params;

    const listAllCampiUniversidadeUseCase = container.resolve(
      ListAllCampiUniversidadeUseCase
    );
    const allCampi = [];
    try {
      const all = await listAllCampiUniversidadeUseCase.execute(
        universidade_id
      );
      allCampi.push(all);
    } catch (error) {
      return res.json(error);
    }

    return res.json(allCampi);
  }
}

export { ListAllCampiUniversidadeController };
