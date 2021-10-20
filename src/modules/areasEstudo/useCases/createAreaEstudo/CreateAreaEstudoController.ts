import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateAreaEstudoUseCase } from "./CreateAreaEstudoUseCase";

class CreateAreaEstudoController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id, nome } = req.body;

    const createAreaEstudoUseCase = container.resolve(CreateAreaEstudoUseCase);

    await createAreaEstudoUseCase.execute({ id, nome });

    return res.status(201).send();
  }
}

export { CreateAreaEstudoController };
