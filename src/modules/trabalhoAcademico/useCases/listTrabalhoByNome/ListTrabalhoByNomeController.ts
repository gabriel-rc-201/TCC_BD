import { Request, Response } from "express";
import { container } from "tsyringe";
import fs from "fs";

import { ListTrabalhoByNomeUseCase } from "./ListTrabalhoByNomeUseCase";

class ListTrabalhoByNomeController {
  async handle(req: Request, res: Response) {
    const titulo = req.params.titulo;

    const listTrabalhoByNomeUseCase = container.resolve(
      ListTrabalhoByNomeUseCase
    );

    const tb = { trabalho: null };
    try {
      tb.trabalho = await listTrabalhoByNomeUseCase.execute(titulo);
    } catch (error) {
      return res
        .status(error.statusCode || 500)
        .json({ message: error.message });
    }

    const file = fs.createReadStream(
      process.cwd() + "/trabalhos/" + tb.trabalho.local_arquivo
    );
    const stat = fs.statSync(
      process.cwd() + "/trabalhos/" + tb.trabalho.local_arquivo
    );
    res.setHeader("Content-Length", stat.size);
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
      "Content-Disposition",
      `attachment; filename=${tb.trabalho.local_arquivo}`
    );
    file.pipe(res);
    return res;
  }
}

export { ListTrabalhoByNomeController };
