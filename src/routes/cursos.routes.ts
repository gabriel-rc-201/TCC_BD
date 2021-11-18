import { Router } from "express";

import { CreateCursoController } from "../modules/universidades/useCases/cursosUseCases/createCusro/CreateCursoController";
import { ListCursoByCampusController } from "../modules/universidades/useCases/cursosUseCases/listCursoByCampus/ListCursoByCampusController";

const cursosRoutes = Router();

const listCursosByCampusController = new ListCursoByCampusController();
const createCursoController = new CreateCursoController();

cursosRoutes.post("/list/campus", listCursosByCampusController.handle);

cursosRoutes.post("/", createCursoController.handle);

export { cursosRoutes };
