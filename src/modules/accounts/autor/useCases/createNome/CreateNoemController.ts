import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateNomeUseCase } from "./CreateNomeUseCase";

class CreateNomeController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { nome, autor_id } = req.body;

    const createNomeUseCase = container.resolve(CreateNomeUseCase);

    await createNomeUseCase.execute(nome, autor_id);

    return res.status(201).send();
  }
}

export { CreateNomeController };
