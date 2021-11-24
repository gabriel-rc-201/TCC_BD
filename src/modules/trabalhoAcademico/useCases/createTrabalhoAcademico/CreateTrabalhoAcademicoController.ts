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
import { AutoresRepository } from "../../../accounts/autor/repositories/implementations/AutoresRepository";
import { OrientadoresRepository } from "../../../accounts/orientador/repositories/implementations/OrientadoresRepository";
import { CreateRealacaoTrabalhoAutorOrientador } from "../../../trabalhoAutorOrientador/useCases/createRelacaoTrabalhoAutorOrientadorUseCase/CreateRelacaoTrabalhoAutorOrientadorUseCase";
import { ListTrabalhoByNome } from "../listTrabalhoByNome/ListTrabalhoByNomeUseCase";
import { CreateTrabalhoAcademicoUseCase } from "./CreateTrabalhoAcademicoUseCase";

class CreateTrabalhoAcademicoController {
  async handle(req: Request, res: Response): Promise<Response> {
    const {
      titulo,
      tipo,
      nivel,
      local_arquivo,
      local_publicacao,
      area_estudo_id,
      autor_id,
      orientador_id,
    } = req.body;

    const createTrabalhoAcademicoUseCase = container.resolve(
      CreateTrabalhoAcademicoUseCase
    );

    const autorRepository = new AutoresRepository();
    const autorExists = autorRepository.findById(autor_id);
    if (!autorExists)
      return res.json({ mensagem: "autor não encontrado" }).status(400);

    const orientadorRepository = new OrientadoresRepository();
    const orientadorExists = orientadorRepository.findById(orientador_id);
    if (!orientadorExists)
      return res.json({ mensagem: "orientador não encontrado" }).status(400);

    try {
      await createTrabalhoAcademicoUseCase.execute({
        titulo,
        tipo,
        nivel,
        local_arquivo,
        local_publicacao,
        area_estudo_id,
      });
    } catch (error) {
      return res
        .status(400)
        .json({ error, mensagem: "erro ao registrar o trabalho" });
    }

    const listTrabalhoByNome = container.resolve(ListTrabalhoByNome);
    let trabalho = null;

    try {
      trabalho = await listTrabalhoByNome.execute(titulo);
    } catch (error) {
      return res
        .status(400)
        .json({ error, mensagem: "alguma merda de erro aqui O.O" });
    }

    const createRealacaoTrabalhoAutorOrientador = container.resolve(
      CreateRealacaoTrabalhoAutorOrientador
    );

    try {
      await createRealacaoTrabalhoAutorOrientador.execute({
        autor_id,
        trabalho_academico_id: trabalho.id,
        orientador_id,
      });
    } catch (error) {
      return res
        .status(400)
        .json({ error, mensage: "erro ao registrar a relação" });
    }

    return res.status(201).send();
  }
}

export { CreateTrabalhoAcademicoController };
