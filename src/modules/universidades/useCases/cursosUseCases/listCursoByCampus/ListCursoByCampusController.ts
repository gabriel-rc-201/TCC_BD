import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListCursoByCampusUseCase } from "./ListCursoByCampusUseCase";

class ListCursoByCampusController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { campus_id } = req.params;

    const listCursoByCampusUseCase = container.resolve(
      ListCursoByCampusUseCase
    );

    const all = await listCursoByCampusUseCase.execute(campus_id);

    return res.json(all);
  }
}

export { ListCursoByCampusController };
