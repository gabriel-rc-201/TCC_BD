import { Request, Response } from "express";
import { container } from "tsyringe";
import { ImportAreasEstudoUseCase } from "./ImportAreaEstudoUseCase";

class ImportAreaEstudoController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { file } = req;

    const importAreaEstudoUseCase = container.resolve(ImportAreasEstudoUseCase);

    await importAreaEstudoUseCase.execute(file);

    return res.status(201).send();
  }
}

export { ImportAreaEstudoController };
