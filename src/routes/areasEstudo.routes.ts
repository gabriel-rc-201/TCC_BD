import { Router } from "express";
import multer from "multer";

const areasEstudoRoutes = Router();

areasEstudoRoutes.get("/", (req, res) => {
  return res.json({ mensage: "Hello from areas de Estudo GET" });
});
areasEstudoRoutes.post("/", (req, res) => {
  return res.json({ mensage: "Hello from areas de Estudo POST" });
});

export { areasEstudoRoutes };
