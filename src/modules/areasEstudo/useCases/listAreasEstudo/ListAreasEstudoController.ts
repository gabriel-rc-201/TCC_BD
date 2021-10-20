import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListAreasEstudoUseCase } from "./ListAreasEstudoUseCase";

class ListAreasEstudoController {
  async handle(req: Request, res: Response): Promise<Response> {
    const listAreasEstudoUseCase = container.resolve(ListAreasEstudoUseCase);

    const all = await listAreasEstudoUseCase.execute();

    return res.json(all);
  }
}

export { ListAreasEstudoController };
