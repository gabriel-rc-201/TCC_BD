import { inject, injectable } from "tsyringe";
import { hash } from "bcrypt";
import { IOrientadoresRepository } from "../../repositories/IOrientadoresRepository";
import { AppError } from "../../../../../errors/AppErros";

interface IRequest {
  email: string;
  nome: string;
  senha: string;
  matricula_siape: string;
}

@injectable()
class CreateOrientadorUseCase {
  constructor(
    @inject("OrientadoresRepository")
    private orientadoresRepository: IOrientadoresRepository
  ) {}

  async execute({
    email,
    nome,
    senha,
    matricula_siape,
  }: IRequest): Promise<void> {
    const orientadorExists = await this.orientadoresRepository.findByMatricula(
      matricula_siape
    );

    if (orientadorExists) {
      throw new AppError("Orientador Already Exists!!!!");
    }

    const senhaHash = await hash(senha, 8);

    await this.orientadoresRepository.create({
      email,
      nome,
      senha: senhaHash,
      matricula_siape,
    });
  }
}

export { CreateOrientadorUseCase };
