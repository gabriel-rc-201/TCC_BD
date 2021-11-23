import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateDominioUseCase } from "./CreateDominioUseCase";

class CreateDominioController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { dominio, universidade_id } = req.body;

    const createDominioUseCase = container.resolve(CreateDominioUseCase);

    try {
      await createDominioUseCase.execute({ dominio, universidade_id });
    } catch (error) {
      return res.json(error).send();
    }

    return res.status(201).send();
  }
}

export { CreateDominioController };
