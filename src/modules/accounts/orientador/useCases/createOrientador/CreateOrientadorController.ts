import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateOrientadorUseCase } from "./CreateOrientadorUseCase";

class CreateOrientadorController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { email, nome, senha, matricula_siape } = req.body;

    const createOrientadorUseCase = container.resolve(CreateOrientadorUseCase);

    await createOrientadorUseCase.execute({
      email,
      nome,
      senha,
      matricula_siape,
    });

    return res.status(201).send();
  }
}

export { CreateOrientadorController };
