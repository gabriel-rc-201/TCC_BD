import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateCampusUseCase } from "./CreateCampusUseCase";

class CreateCampusController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { nome, universidade_id } = req.body;

    const createCampusUseCase = container.resolve(CreateCampusUseCase);

    await createCampusUseCase.execute({ nome, universidade_id });

    return res.status(201).send();
  }
}

export { CreateCampusController };
