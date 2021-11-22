import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateNomeUseCase } from "./CreateNomeUseCase";

class CreateNomeController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { nome, autorid } = req.body;

    const createNomeUseCase = container.resolve(CreateNomeUseCase);

    await createNomeUseCase.execute(nome, autorid);

    return res.status(201).send();
  }
}

export { CreateNomeController };
