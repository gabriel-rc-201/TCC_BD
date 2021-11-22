import { Router } from "express";
import { CreateAutorController } from "../modules/accounts/autor/useCases/createAutor/CreateAutorController";
import { CreateNomeController } from "../modules/accounts/autor/useCases/createNome/CreateNoemController";
import { ListAutoresController } from "../modules/accounts/autor/useCases/listAutores/ListAutoresController";
import { ListAllNomesByAutorController } from "../modules/accounts/autor/useCases/listNomeByAutor/ListNomeByAutorController";

const autoresRoutes = Router();

const createAutorController = new CreateAutorController();
const listAutoresController = new ListAutoresController();

const createNomeController = new CreateNomeController();
const listAllNomesByAutorController = new ListAllNomesByAutorController();

autoresRoutes.post("/", createAutorController.handle);
autoresRoutes.get("/", listAutoresController.handle);

autoresRoutes.post("/createNome", createNomeController.handle);
autoresRoutes.post("/listNomes", listAllNomesByAutorController.handle);

export { autoresRoutes };
