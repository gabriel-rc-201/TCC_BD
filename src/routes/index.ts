import { Router } from "express";

import { areasEstudoRoutes } from "./areasEstudo.routes";
import { universidadesRoutes } from "./universidades.routes";

const router = Router();

router.use("/areasEstudo", areasEstudoRoutes);
router.use("/universidades", universidadesRoutes);

export { router };
