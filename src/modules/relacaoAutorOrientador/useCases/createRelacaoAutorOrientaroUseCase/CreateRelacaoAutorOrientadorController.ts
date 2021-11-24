import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateRelacaoAutorOrientadorUseCase } from "./CreateRelacaoAutorOrientadorUseCase";

class CreateRelacaoAutorOrientadorController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { autor_id, orientador_id } = req.body;

    const createRelacaoAutorOrientadorUseCase = container.resolve(
      CreateRelacaoAutorOrientadorUseCase
    );

    await createRelacaoAutorOrientadorUseCase.execute({
      autor_id,
      orientador_id,
    });

    return res.status(201).send();
  }
}

export { CreateRelacaoAutorOrientadorController };
