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
import { CreateRealacaoTrabalhoAutorOrientador } from "../../../trabalhoAutorOrientador/useCases/createRelacaoTrabalhoAutorOrientadorUseCase/CreateRelacaoTrabalhoAutorOrientadorUseCase";
import { ListTrabalhoByNome } from "../listTrabalhoByNome/ListTrabalhoByNomeUseCase";
import { CreateTrabalhoAcademicoUseCase } from "./CreateTrabalhoAcademicoUseCase";

class CreateTrabalhoAcademicoController {
  async handle(req: Request, res: Response): Promise<Response> {
    const {
      titulo,
      tipo,
      nivel,
      localdoarquivo,
      localdepublicacao,
      areaestudoid,
      autorid,
      orientadorid,
    } = req.body;

    const createTrabalhoAcademicoUseCase = container.resolve(
      CreateTrabalhoAcademicoUseCase
    );

    try {
      await createTrabalhoAcademicoUseCase.execute({
        titulo,
        tipo,
        nivel,
        localdoarquivo,
        localdepublicacao,
        areaestudoid,
      });
    } catch (error) {
      return res.status(400).json(error);
    }

    const listTrabalhoByNome = container.resolve(ListTrabalhoByNome);
    let trabalho = null;

    try {
      trabalho = await listTrabalhoByNome.execute(titulo);
    } catch (error) {
      return res.status(400).json(error);
    }

    const createRealacaoTrabalhoAutorOrientador = container.resolve(
      CreateRealacaoTrabalhoAutorOrientador
    );

    try {
      console.log({ autorid: autorid });
      await createRealacaoTrabalhoAutorOrientador.execute(
        autorid,
        trabalho.id,
        orientadorid
      );
    } catch (error) {
      return res
        .status(400)
        .json({ error, mensage: "erro ao registrar a relação" });
    }

    return res.status(201).send();
  }
}

export { CreateTrabalhoAcademicoController };
