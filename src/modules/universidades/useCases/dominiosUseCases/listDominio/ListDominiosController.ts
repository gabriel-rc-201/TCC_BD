import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListDominioUseCase } from "./ListDominioUseCase";

class ListDominioController {
  async handle(req: Request, res: Response): Promise<Response> {
    const listDominiosUseCase = container.resolve(ListDominioUseCase);

    const all = await listDominiosUseCase.execute();

    return res.json(all);
  }
}

export { ListDominioController };
