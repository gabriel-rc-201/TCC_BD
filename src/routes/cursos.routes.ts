import { Router } from "express";

import { CreateCursoController } from "../modules/universidades/useCases/cursosUseCases/createCusro/CreateCursoController";
import { ListCursoByCampusController } from "../modules/universidades/useCases/cursosUseCases/listCursoByCampus/ListCursoByCampusController";

const cursosRoutes = Router();

const listCursosByCampusController = new ListCursoByCampusController();
const createCursoController = new CreateCursoController();

cursosRoutes.get("/", listCursosByCampusController.handle);

cursosRoutes.post("/", createCursoController.handle);

export { cursosRoutes };
