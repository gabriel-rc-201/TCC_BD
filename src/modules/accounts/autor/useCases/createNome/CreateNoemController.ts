import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateNomeUseCase } from "./CreateNomeUseCase";

class CreateNomeController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { nome } = req.body;
    const autor_id = req.user.id;

    const createNomeUseCase = container.resolve(CreateNomeUseCase);

    try {
      await createNomeUseCase.execute(nome, autor_id);
    } catch (error) {
      return res.json(error);
    }

    return res.status(201).send();
  }
}

export { CreateNomeController };
