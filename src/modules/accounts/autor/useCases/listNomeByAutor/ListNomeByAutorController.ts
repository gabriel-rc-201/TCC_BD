import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListAllNomesByAutorUseCase } from "./ListNomeByAutorUseCase";

class ListAllNomesByAutorController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { autorid } = req.body;

    const listAllCampiUniversidadeUseCase = container.resolve(
      ListAllNomesByAutorUseCase
    );

    const all = await listAllCampiUniversidadeUseCase.execute(autorid);

    return res.json(all);
  }
}

export { ListAllNomesByAutorController };
