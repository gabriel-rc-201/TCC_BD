import { Router } from "express";
import multer from "multer";

import { ImportAreaEstudoController } from "../modules/areasEstudo/useCases/importAreaEstudo/ImportAreaEstudoController";
import { ListAreasEstudoController } from "../modules/areasEstudo/useCases/listAreasEstudo/ListAreasEstudoController";

const areasEstudoRoutes = Router();

const upload = multer({
  dest: "./tmp",
});

const importAreaEstudoController = new ImportAreaEstudoController();
const listAreasEstudoController = new ListAreasEstudoController();

areasEstudoRoutes.get("/", listAreasEstudoController.handle);

areasEstudoRoutes.post(
  "/import",
  upload.single("file"),
  importAreaEstudoController.handle
);

export { areasEstudoRoutes };
