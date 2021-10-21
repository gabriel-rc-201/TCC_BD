import { Router } from "express";
import multer from "multer";

import { CreateUniversidadeController } from "../modules/universidades/useCases/createUniversidade/CreateUniversidadeController";
import { ImportUniversidadeController } from "../modules/universidades/useCases/importUniversidade/ImportAreaEstudoController";
import { ListUniversidadeController } from "../modules/universidades/useCases/listUniversidade/ListUniversidadeController";

const universidadesRoutes = Router();

const upload = multer({
  dest: "./tmp",
});

const importUniversidadeController = new ImportUniversidadeController();
const listUniversidadeController = new ListUniversidadeController();
const createUniversidadeController = new CreateUniversidadeController();

universidadesRoutes.get("/", listUniversidadeController.handle);

universidadesRoutes.post("/", createUniversidadeController.handle);

universidadesRoutes.post(
  "/import",
  upload.single("file"),
  importUniversidadeController.handle
);

export { universidadesRoutes };
