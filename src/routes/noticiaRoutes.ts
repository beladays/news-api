import express from "express";
import { listarNoticias, criarNoticia } from "../controllers/noticiaController";

const router = express.Router();

router.get("/", listarNoticias);
router.post("/", criarNoticia);

export default router;
