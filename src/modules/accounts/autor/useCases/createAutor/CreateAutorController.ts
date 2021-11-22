import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateAutorUseCase } from "./CreateAutorUseCase";

class CreateAutorController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { email, nome, senha, matricula } = req.body;

    const createAutorUseCase = container.resolve(CreateAutorUseCase);

    await createAutorUseCase.execute({ email, nome, senha, matricula });

    return res.status(201).send();
  }
}

export { CreateAutorController };
