import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateDominioUseCase } from "./CreateDominioUseCase";

class CreateDominioController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { dominio, universidade_id } = req.body;

    const createDominioUseCase = container.resolve(CreateDominioUseCase);

    await createDominioUseCase.execute({ dominio, universidade_id });

    return res.status(201).send();
  }
}

export { CreateDominioController };
