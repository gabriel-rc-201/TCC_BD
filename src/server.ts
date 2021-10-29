import "reflect-metadata";
import express, { NextFunction, Request, Response } from "express";

import "./database";

import "./shared/container";

import { router } from "./routes";
import { AppError } from "./errors/AppErros";

const app = express();

app.use(express.json());

app.use(router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof AppError)
    return res.status(err.statusCode).json({
      message: err.message,
    });

  return res.status(500).json({
    status: "error",
    message: `Internal Server Error - ${err.message}`,
  });
});

app.listen(3333, () => console.log("server is running!"));
