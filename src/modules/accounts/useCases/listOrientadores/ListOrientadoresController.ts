import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListOrientadoresUseCase } from "./ListOrientadoresUseCase";

class ListOrientadoresController {
  async handle(req: Request, res: Response): Promise<Response> {
    const listOrientadoresUseCase = container.resolve(ListOrientadoresUseCase);

    const all = await listOrientadoresUseCase.execute();

    return res.json(all);
  }
}

export { ListOrientadoresController };
