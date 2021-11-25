import { Router } from "express";
import { CreateAutorController } from "../modules/accounts/autor/useCases/createAutor/CreateAutorController";
import { CreateNomeController } from "../modules/accounts/autor/useCases/createNome/CreateNoemController";
import { ListAutoresController } from "../modules/accounts/autor/useCases/listAutores/ListAutoresController";
import { ListAllNomesByAutorController } from "../modules/accounts/autor/useCases/listNomeByAutor/ListNomeByAutorController";
import { CreateRelacaoAutorOrientadorController } from "../modules/relacaoAutorOrientador/useCases/createRelacaoAutorOrientaroUseCase/CreateRelacaoAutorOrientadorController";

const autoresRoutes = Router();

const createAutorController = new CreateAutorController();
const listAutoresController = new ListAutoresController();

const createNomeController = new CreateNomeController();
const listAllNomesByAutorController = new ListAllNomesByAutorController();

const createRelacaoAutorOrientadorController =
  new CreateRelacaoAutorOrientadorController();

autoresRoutes.post("/", createAutorController.handle);
autoresRoutes.get("/", listAutoresController.handle);

autoresRoutes.post("/createNome", createNomeController.handle);
autoresRoutes.post("/listNomes", listAllNomesByAutorController.handle);

autoresRoutes.post(
  "/orientacao",
  createRelacaoAutorOrientadorController.handle
);

export { autoresRoutes };
