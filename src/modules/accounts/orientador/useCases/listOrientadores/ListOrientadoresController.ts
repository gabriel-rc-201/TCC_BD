import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListOrientadoresUseCase } from "./ListOrientadoresUseCase";

class ListOrientadoresController {
  async handle(req: Request, res: Response): Promise<Response> {
    const listOrientadoresUseCase = container.resolve(ListOrientadoresUseCase);

    const all = { orientadores: [] };
    try {
      all.orientadores = await listOrientadoresUseCase.execute();
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }

    return res.json(all);
  }
}

export { ListOrientadoresController };
