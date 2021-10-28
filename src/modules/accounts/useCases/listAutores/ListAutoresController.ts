import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListAutoresUseCase } from "./ListAutoresUseCase";

class ListAutoresController {
  async handle(req: Request, res: Response): Promise<Response> {
    const listAutoresUseCase = container.resolve(ListAutoresUseCase);

    const all = listAutoresUseCase.execute();

    return res.json(all);
  }
}

export { ListAutoresController };
