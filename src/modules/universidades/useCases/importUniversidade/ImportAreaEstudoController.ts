import { Request, Response } from "express";
import { container } from "tsyringe";
import { ImportUniversidadeUseCase } from "./importUniversidadeUseCase";

class ImportUniversidadeController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { file } = req;

    const importUniversidadeUseCase = container.resolve(
      ImportUniversidadeUseCase
    );

    await importUniversidadeUseCase.execute(file);

    return res.status(201).send();
  }
}

export { ImportUniversidadeController };
