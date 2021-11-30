import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListAutoresUseCase } from "./ListAutoresUseCase";

class ListAutoresController {
  async handle(req: Request, res: Response): Promise<Response> {
    const listAutoresUseCase = container.resolve(ListAutoresUseCase);

    const all = { autores: [] };

    try {
      all.autores = await listAutoresUseCase.execute();
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }

    return res.json(all.autores);
  }
}

export { ListAutoresController };
