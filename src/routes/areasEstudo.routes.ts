import { Router } from "express";
import multer from "multer";

import { ImportAreaEstudoController } from "../modules/areasEstudo/useCases/importAreaEstudo/ImportAreaEstudoController";

const areasEstudoRoutes = Router();

const upload = multer({
  dest: "./tmp",
});

const importAreaEstudoController = new ImportAreaEstudoController();

areasEstudoRoutes.get("/", (req, res) => {
  return res.json({ mensage: "Hello from areas de Estudo GET" });
});

areasEstudoRoutes.post(
  "/import",
  upload.single("file"),
  importAreaEstudoController.handle
);

export { areasEstudoRoutes };
