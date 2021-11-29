import { Router } from "express";
import multer from "multer";

import uploadConfig from "../config/upload";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

import { CreateTrabalhoAcademicoController } from "../modules/trabalhoAcademico/useCases/createTrabalhoAcademico/CreateTrabalhoAcademicoController";
import { ListAllTrabalhosAcademicosController } from "../modules/trabalhoAcademico/useCases/listAllTrabalhosAcademicos/ListAllTrabalhosAcademicosController";
import { ListTrabalhoByNomeController } from "../modules/trabalhoAcademico/useCases/listTrabalhoByNome/ListTrabalhoByNomeController";

const trabalhosRoutes = Router();

const uploadTrabalho = multer(uploadConfig.upload("./trabalhos"));

const createTrabalhoAcademicoController =
  new CreateTrabalhoAcademicoController();

const listTrabalhoByNomeController = new ListTrabalhoByNomeController();
const listAllTrabalhosAcademicosController =
  new ListAllTrabalhosAcademicosController();

trabalhosRoutes.post(
  "/",
  ensureAuthenticated,
  uploadTrabalho.single("arquivo"),
  createTrabalhoAcademicoController.handle
);

trabalhosRoutes.get("/", listAllTrabalhosAcademicosController.handle);
trabalhosRoutes.get("/:titulo", listTrabalhoByNomeController.handle);

export { trabalhosRoutes };
