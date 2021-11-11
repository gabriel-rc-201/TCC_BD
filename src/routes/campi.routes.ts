import { Router } from "express";

import { CreateCampusController } from "../modules/universidades/useCases/campiUseCases/createCampus/CreateCampusController";
import { ListAllCampiUniversidadeController } from "../modules/universidades/useCases/campiUseCases/listCampiUniversidade/ListAllCampiUniversidadeController";

const campiRoutes = Router();

const listCampiUniversidadeController =
  new ListAllCampiUniversidadeController();
const createCampusController = new CreateCampusController();

campiRoutes.get("/", listCampiUniversidadeController.handle);

campiRoutes.post("/", createCampusController.handle);

export { campiRoutes };
