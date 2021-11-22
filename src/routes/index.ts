import { Router } from "express";

import { areasEstudoRoutes } from "./areasEstudo.routes";
import { authenticateRoutes } from "./authenticate.routes";
import { autoresRoutes } from "./autores.routes";
import { campiRoutes } from "./campi.routes";
import { cursosRoutes } from "./cursos.routes";
import { dominiosRoutes } from "./dominios.routes";
import { orientadoresRoutes } from "./orientadores.routes";
import { trabalhosRoutes } from "./trabalhos.routes";
import { universidadesRoutes } from "./universidades.routes";

const router = Router();

router.use("/areasEstudo", areasEstudoRoutes);
router.use("/autores", autoresRoutes);
router.use("/orientadores", orientadoresRoutes);
router.use("/trabalhos", trabalhosRoutes);
router.use("/universidades", universidadesRoutes);
router.use("/dominios", dominiosRoutes);
router.use("/campus", campiRoutes);
router.use("/cursos", cursosRoutes);

router.use(authenticateRoutes);

export { router };
