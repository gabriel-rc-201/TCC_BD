import { Router } from "express";
import { CreateOrientadorController } from "../modules/accounts/useCases/createOrientador/CreateOrientadorController";

const orientadoresRoutes = Router();

const createOrientadorController = new CreateOrientadorController();

orientadoresRoutes.post("/", createOrientadorController.handle);

export { orientadoresRoutes };
