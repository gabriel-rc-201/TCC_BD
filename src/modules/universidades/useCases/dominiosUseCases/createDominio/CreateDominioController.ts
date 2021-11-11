import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateDominioUseCase } from "./CreateDominioUseCase";

class CreateDominioController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { dominio, universidadeid } = req.body;

    const createDominioUseCase = container.resolve(CreateDominioUseCase);

    await createDominioUseCase.execute({ dominio, universidadeid });

    return res.status(201).send();
  }
}

export { CreateDominioController };
