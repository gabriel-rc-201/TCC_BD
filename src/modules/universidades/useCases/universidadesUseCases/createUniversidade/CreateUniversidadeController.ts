import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUniversidadeUseCase } from "./CreateUniversidadeUseCase";

class CreateUniversidadeController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { nome, cnpj } = req.body;

    const createUniversidadeUseCase = container.resolve(
      CreateUniversidadeUseCase
    );

    await createUniversidadeUseCase.execute({ nome, cnpj });

    return res.status(201).send();
  }
}

export { CreateUniversidadeController };
