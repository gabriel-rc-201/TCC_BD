import { Router } from "express";

import { CreateDominioController } from "../modules/universidades/useCases/dominiosUseCases/createDominio/CreateDominioController";
import { ListDominioController } from "../modules/universidades/useCases/dominiosUseCases/listDominio/ListDominiosController";

const dominiosRoutes = Router();

const listDominiosController = new ListDominioController();
const createDominioController = new CreateDominioController();

dominiosRoutes.get("/", listDominiosController.handle);

dominiosRoutes.post("/", createDominioController.handle);

export { dominiosRoutes };
