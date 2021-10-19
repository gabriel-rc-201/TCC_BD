import { Router } from "express";

import { areasEstudoRoutes } from "./areasEstudo.routes";

const router = Router();

router.use("/areasEstudo", areasEstudoRoutes);

export { router };
