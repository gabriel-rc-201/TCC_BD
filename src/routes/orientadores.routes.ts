import { Router } from "express";
import { CreateOrientadorController } from "../modules/accounts/useCases/createOrientador/CreateOrientadorController";
import { ListOrientadoresController } from "../modules/accounts/useCases/listOrientadores/ListOrientadoresController";

const orientadoresRoutes = Router();

const createOrientadorController = new CreateOrientadorController();
const listOrientadoresController = new ListOrientadoresController();

orientadoresRoutes.post("/", createOrientadorController.handle);
orientadoresRoutes.get("/", listOrientadoresController.handle);

export { orientadoresRoutes };
