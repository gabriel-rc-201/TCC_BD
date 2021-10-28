import { Router } from "express";
import { CreateAutorController } from "../modules/accounts/useCases/createAutor/CreateAutorController";

const autoresRoutes = Router();

const createAutorController = new CreateAutorController();

autoresRoutes.post("/", createAutorController.handle);

export { autoresRoutes };
