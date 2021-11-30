/*
  1 - chama use case pra criar o trabalho academico
  2 - registrar a relação entre trabalho autor orientador
    > verificar se é um array de orientador
      - se for: 
        chama o use case que faz com a parada com array
      - else:
        chama o normal mesmo (que registra só um mesmo) 
*/

import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateRelacaoTrabalhoAutorOrientador } from "../../../trabalhoAutorOrientador/useCases/createRelacaoTrabalhoAutorOrientadorUseCase/CreateRelacaoTrabalhoAutorOrientadorUseCase";
import { ListTrabalhoByNomeUseCase } from "../listTrabalhoByNome/ListTrabalhoByNomeUseCase";
import { CreateTrabalhoAcademicoUseCase } from "./CreateTrabalhoAcademicoUseCase";

class CreateTrabalhoAcademicoController {
  async handle(req: Request, res: Response): Promise<Response> {
    const {
      titulo,
      tipo,
      nivel,
      local_publicacao,
      area_estudo_id,
      orientador_id,
    } = req.body;
    const autor_id = req.user.id;

    const trabalhoFile = req.file.filename;

    const createTrabalhoAcademicoUseCase = container.resolve(
      CreateTrabalhoAcademicoUseCase
    );

    try {
      await createTrabalhoAcademicoUseCase.execute({
        titulo,
        tipo,
        nivel,
        local_arquivo: trabalhoFile,
        local_publicacao,
        area_estudo_id,
        autor_id,
        orientador_id,
      });
    } catch (error) {
      return res
        .status(error.statusCode || 400)
        .json({ message: error.message });
    }

    const listTrabalhoByNome = container.resolve(ListTrabalhoByNomeUseCase);
    const trabalho = { trabalho: null };

    try {
      trabalho.trabalho = await listTrabalhoByNome.execute(titulo);
    } catch (error) {
      return res
        .status(error.statusCode || 400)
        .json({ message: error.message });
    }

    const createRealacaoTrabalhoAutorOrientador = container.resolve(
      CreateRelacaoTrabalhoAutorOrientador
    );

    try {
      await createRealacaoTrabalhoAutorOrientador.execute({
        autor_id,
        trabalho_academico_id: trabalho.trabalho.id,
        orientador_id,
      });
    } catch (error) {
      return res
        .status(error.statusCode || 400)
        .json({ message: error.message });
    }

    return res.status(201).send();
  }
}

export { CreateTrabalhoAcademicoController };
