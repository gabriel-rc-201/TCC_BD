import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateCampusUseCase } from "./CreateCampusUseCase";

class CreateCampusController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { nome, universidade_id } = req.body;

    const createCampusUseCase = container.resolve(CreateCampusUseCase);
    try {
      await createCampusUseCase.execute({ nome, universidade_id });
    } catch (error) {
      return res.json(error);
    }

    return res.status(201).send();
  }
}

export { CreateCampusController };
