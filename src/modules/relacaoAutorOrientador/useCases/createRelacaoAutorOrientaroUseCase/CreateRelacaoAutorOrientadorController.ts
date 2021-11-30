import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateRelacaoAutorOrientadorUseCase } from "./CreateRelacaoAutorOrientadorUseCase";

class CreateRelacaoAutorOrientadorController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { orientador_id } = req.body;
    const autor_id = req.user.id;

    const createRelacaoAutorOrientadorUseCase = container.resolve(
      CreateRelacaoAutorOrientadorUseCase
    );

    try {
      await createRelacaoAutorOrientadorUseCase.execute({
        autor_id,
        orientador_id,
      });
    } catch (error) {
      return res.status(error.statusCode || 400).json({
        message: error.message,
      });
    }

    return res.status(201).send();
  }
}

export { CreateRelacaoAutorOrientadorController };
