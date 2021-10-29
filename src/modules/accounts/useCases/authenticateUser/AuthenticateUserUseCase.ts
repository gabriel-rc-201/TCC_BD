import { inject, injectable } from "tsyringe";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { IAutoresRepository } from "../../repositories/IAutoresRepository";
import { IOrientadoresRepository } from "../../repositories/IOrientadoresRepository";

interface IRequest {
  matricula: string;
  password: string;
  isOrientador: boolean;
}

interface IResponse {
  user: { name: string; email: string };
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

    if (!user[0]) throw new Error("Matricula or Password Incorrect!!!");

    const passwordMatch = await compare(password, user[0].senha);

    if (!passwordMatch) throw new Error("Matricula or Password Incorrect!!!");

    const token = sign({}, "800db3ef1f77e2928e0e1877b8c6fc54", {
      subject: user[0].id.toString(),
      expiresIn: "1d",
    });

    const tokenReturn: IResponse = {
      token,
      user: {
        name: user[0].nome,
        email: user[0].email,
      },
    };

    return tokenReturn;
  }
}

export { AuthenticateUserUseCase };
