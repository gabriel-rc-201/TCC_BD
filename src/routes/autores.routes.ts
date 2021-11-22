import { Router } from "express";
import { CreateAutorController } from "../modules/accounts/autor/useCases/createAutor/CreateAutorController";
import { ListAutoresController } from "../modules/accounts/autor/useCases/listAutores/ListAutoresController";

const autoresRoutes = Router();

const createAutorController = new CreateAutorController();
const listAutoresController = new ListAutoresController();

autoresRoutes.post("/", createAutorController.handle);
autoresRoutes.get("/", listAutoresController.handle);

export { autoresRoutes };
