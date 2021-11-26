import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListAllTrabalhosAcademicosUseCase } from "./ListAllTrabalhosAcademicosUseCase";

class ListAllTrabalhosAcademicosController {
  async handle(req: Request, res: Response) {
    const listAllTrabalhosAcademicosUseCase = container.resolve(
      ListAllTrabalhosAcademicosUseCase
    );

    const trabalhos = await listAllTrabalhosAcademicosUseCase.execute();
    return res.json(trabalhos);
  }
}

export { ListAllTrabalhosAcademicosController };
