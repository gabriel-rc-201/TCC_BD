import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListAllNomesByAutorUseCase } from "./ListNomeByAutorUseCase";

class ListAllNomesByAutorController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { autor_id } = req.body;

    const listAllCampiUniversidadeUseCase = container.resolve(
      ListAllNomesByAutorUseCase
    );

    const all = await listAllCampiUniversidadeUseCase.execute(autor_id);

    return res.json(all);
  }
}

export { ListAllNomesByAutorController };
