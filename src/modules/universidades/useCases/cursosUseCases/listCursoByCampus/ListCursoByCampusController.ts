import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListCursoByCampusUseCase } from "./ListCursoByCampusUseCase";

class ListCursoByCampusController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { campus_id } = req.params;

    const listCursoByCampusUseCase = container.resolve(
      ListCursoByCampusUseCase
    );

    const all = { cursos: [] };
    try {
      all.cursos = await listCursoByCampusUseCase.execute(campus_id);
    } catch (error) {
      return res
        .status(error.statusCode || 400)
        .json({ message: error.message });
    }

    return res.json(all);
  }
}

export { ListCursoByCampusController };
