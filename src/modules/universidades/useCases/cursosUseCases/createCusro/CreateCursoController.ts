import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateCursoUseCase } from "./CreateCursoUseCase";

class CreateCursoController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { nome, campusid, universidadeid, turno, modalidade } = req.body;

    const createCursoUseCase = container.resolve(CreateCursoUseCase);

    await createCursoUseCase.execute({
      nome,
      campusid,
      universidadeid,
      turno,
      modalidade,
    });

    return res.status(201).send();
  }
}

export { CreateCursoController };
