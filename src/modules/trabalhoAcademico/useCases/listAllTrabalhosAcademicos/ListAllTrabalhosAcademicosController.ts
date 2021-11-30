import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListAllTrabalhosAcademicosUseCase } from "./ListAllTrabalhosAcademicosUseCase";

class ListAllTrabalhosAcademicosController {
  async handle(req: Request, res: Response) {
    const listAllTrabalhosAcademicosUseCase = container.resolve(
      ListAllTrabalhosAcademicosUseCase
    );

    const all = { trabalhos: [] };
    try {
      all.trabalhos = await listAllTrabalhosAcademicosUseCase.execute();
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }

    return res.json(all.trabalhos);
  }
}

export { ListAllTrabalhosAcademicosController };
