import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { AppError } from "../errors/AppErros";
import { AutoresRepository } from "../modules/accounts/autor/repositories/implementations/AutoresRepository";
import { OrientadoresRepository } from "../modules/accounts/orientador/repositories/implementations/OrientadoresRepository";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;

  if (!authHeader) throw new AppError("Token missing", 401);

  const [, token] = authHeader.split(" ");

  try {
    const { sub: user_id } = verify(
      token,
      "800db3ef1f77e2928e0e1877b8c6fc54"
    ) as IPayload;

    const autroRepository = new AutoresRepository();
    const userAutor = await autroRepository.findById(user_id);

    const orientadorRepository = new OrientadoresRepository();
    const userOrientador = await orientadorRepository.findById(user_id);

    if (!userAutor || !userOrientador)
      throw new AppError("User does not exists!", 401);

    req.user = { id: user_id };

    next();
  } catch {
    throw new AppError("Invalid token!!!", 401);
  }
}
