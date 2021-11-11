import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListUniversidadeUseCase } from "./ListUniversidadeUseCase";

class ListUniversidadeController {
  async handle(req: Request, res: Response): Promise<Response> {
    const listUniversidadeUseCase = container.resolve(ListUniversidadeUseCase);

    const all = await listUniversidadeUseCase.execute();

    return res.json(all);
  }
}

export { ListUniversidadeController };
