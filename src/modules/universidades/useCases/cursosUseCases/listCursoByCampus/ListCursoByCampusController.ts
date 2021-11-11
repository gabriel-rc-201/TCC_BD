import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListCursoByCampusUseCase } from "./ListCursoByCampusUseCase";

class ListCursoByCampusController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { campusid } = req.body;

    const listCursoByCampusUseCase = container.resolve(
      ListCursoByCampusUseCase
    );

    const all = listCursoByCampusUseCase.execute(campusid);

    return res.json(all);
  }
}

export { ListCursoByCampusController };
