import { inject, injectable } from "tsyringe";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { AppError } from "../../../../errors/AppErros";
import { IAutoresRepository } from "../../autor/repositories/IAutoresRepository";
import { IOrientadoresRepository } from "../../orientador/repositories/IOrientadoresRepository";

interface IRequest {
  matricula: string;
  password: string;
  isOrientador: boolean;
}

interface IResponse {
  user: { name: string; email: string; matricula: string };
  token: string;
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject("AutoresRepository")
    private autoresRepository: IAutoresRepository,

    @inject("OrientadoresRepository")
    private orientadoresRepository: IOrientadoresRepository
  ) {}

  async execute({
    matricula,
    password,
    isOrientador,
  }: IRequest): Promise<IResponse> {
    const user = [];
    if (isOrientador)
      user.push(await this.orientadoresRepository.findByMatricula(matricula));
    else user.push(await this.autoresRepository.findByMatricula(matricula));

    const usuario = user[0];
    if (!usuario) throw new AppError("Matricula or Password Incorrect!!!", 401);

    const passwordMatch = await compare(password, usuario.senha);

    if (!passwordMatch)
      throw new AppError("Matricula or Password Incorrect!!!", 401);

    const token = sign({}, "800db3ef1f77e2928e0e1877b8c6fc54", {
      subject: usuario.id.toString(),
      expiresIn: "1d",
    });

    const tokenReturn: IResponse = {
      token,
      user: {
        name: usuario.nome,
        email: usuario.email,
        matricula: usuario.matricula,
      },
    };

    return tokenReturn;
  }
}

export { AuthenticateUserUseCase };
