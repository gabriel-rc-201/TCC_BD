import { Router } from "express";
import { CreateTrabalhoAcademicoController } from "../modules/trabalhoAcademico/useCases/createTrabalhoAcademico/CreateTrabalhoAcademicoController";

const trabalhosRoutes = Router();

const createTrabalhoAcademicoController =
  new CreateTrabalhoAcademicoController();

trabalhosRoutes.post("/", createTrabalhoAcademicoController.handle);

export { trabalhosRoutes };
