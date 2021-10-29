import { inject, injectable } from "tsyringe";
import { hash } from "bcrypt";

import { IAutoresRepository } from "../../repositories/IAutoresRepository";
import { AppError } from "../../../../errors/AppErros";

interface IRequest {
  email: string;
  nome: string;
  senha: string;
  matricula: string;
}

@injectable()
class CreateAutorUseCase {
  constructor(
    @inject("AutoresRepository")
    private autoresRepository: IAutoresRepository
  ) {}

  async execute({ email, nome, senha, matricula }: IRequest): Promise<void> {
    const autorExists = await this.autoresRepository.findByMatricula(matricula);

    if (autorExists) {
      throw new AppError("Autor Already Exists!!!!");
    }

    const id =
      parseInt((await this.autoresRepository.findMaxId()).toString()) + 1;

    const senhaHash = await hash(senha, 8);

    await this.autoresRepository.create({
      id,
      email,
      nome,
      senha: senhaHash,
      matricula,
    });
  }
}

export { CreateAutorUseCase };
