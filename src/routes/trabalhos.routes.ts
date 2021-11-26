import { Router } from "express";
import multer from "multer";
import uploadConfig from "../config/upload";
import { CreateTrabalhoAcademicoController } from "../modules/trabalhoAcademico/useCases/createTrabalhoAcademico/CreateTrabalhoAcademicoController";
import { ListTrabalhoByNomeController } from "../modules/trabalhoAcademico/useCases/listTrabalhoByNome/ListTrabalhoByNomeController";

const trabalhosRoutes = Router();

const uploadTrabalho = multer(uploadConfig.upload("./trabalhos"));

const createTrabalhoAcademicoController =
  new CreateTrabalhoAcademicoController();

const listTrabalhoByNomeController = new ListTrabalhoByNomeController();

trabalhosRoutes.post(
  "/",
  uploadTrabalho.single("arquivo"),
  createTrabalhoAcademicoController.handle
);

trabalhosRoutes.get("/:titulo", listTrabalhoByNomeController.handle);

export { trabalhosRoutes };
