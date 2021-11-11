import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateCampusUseCase } from "./CreateCampusUseCase";

class CreateCampusController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { nome, universidadeid } = req.body;

    const createCampusUseCase = container.resolve(CreateCampusUseCase);

    await createCampusUseCase.execute({ nome, universidadeid });

    return res.status(201).send();
  }
}

export { CreateCampusController };
