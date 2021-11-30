import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListAllNomesByAutorUseCase } from "./ListNomeByAutorUseCase";

class ListAllNomesByAutorController {
  async handle(req: Request, res: Response): Promise<Response> {
    const autor_id = req.user.id;

    const listAllNomesByAutorUseCase = container.resolve(
      ListAllNomesByAutorUseCase
    );

    const all = { nomes: [] };
    try {
      all.nomes = await listAllNomesByAutorUseCase.execute(autor_id);
    } catch (error) {
      return res
        .status(error.statusCode || 400)
        .json({ message: error.message });
    }

    return res.json(all.nomes);
  }
}

export { ListAllNomesByAutorController };
