import { Router } from "express";

import { areasEstudoRoutes } from "./areasEstudo.routes";
import { authenticateRoutes } from "./authenticate.routes";
import { autoresRoutes } from "./autores.routes";
import { orientadoresRoutes } from "./orientadores.routes";
import { universidadesRoutes } from "./universidades.routes";

const router = Router();

router.use("/areasEstudo", areasEstudoRoutes);
router.use("/universidades", universidadesRoutes);
router.use("/autores", autoresRoutes);
router.use("/orientadores", orientadoresRoutes);
router.use(authenticateRoutes);

export { router };
