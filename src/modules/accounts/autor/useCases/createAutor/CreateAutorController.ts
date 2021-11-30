import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateRelacaoAutorCursoUseCase } from "../../../../relacaoAutorCurso/useCases/createRelacaoAutorCursoUseCase/CreateRelacaoAutroCursoUseCase";
import { FindAutorByMatricualaUseCase } from "../findAutorByNomeUseCase/FindAutorByNomeUseCase";
import { CreateAutorUseCase } from "./CreateAutorUseCase";

class CreateAutorController {
  async handle(req: Request, res: Response): Promise<Response> {
    const {
      email,
      nome,
      senha,
      matricula,
      curso_id,
      campus_id,
      universidade_id,
      data_inicio,
      data_fim,
    } = req.body;
    const createAutorUseCase = container.resolve(CreateAutorUseCase);

    try {
      await createAutorUseCase.execute({
        email,
        nome,
        senha,
        matricula,
        curso_id,
        campus_id,
        universidade_id,
      });
    } catch (error) {
      return res
        .status(error.statusCode || 400)
        .json({ message: error.message });
    }

    const findAutorByMatricualaUseCase = container.resolve(
      FindAutorByMatricualaUseCase
    );

    try {
      const autor = await findAutorByMatricualaUseCase.execute(matricula);

      const createRelacaoAutorCursoUseCase = container.resolve(
        CreateRelacaoAutorCursoUseCase
      );

      await createRelacaoAutorCursoUseCase.execute({
        autor_id: autor.id,
        campus_id,
        curso_id,
        universidade_id,
        data_inicio,
        data_fim,
      });
    } catch (error) {
      return res.json({
        error,
        message: "erro ao registrar a relação entre autor e curso",
      });
    }

    return res.status(201).send();
  }
}

export { CreateAutorController };
