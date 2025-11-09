import express from "express";
import { listarFavoritos, adicionarFavorito, removerFavorito } from "../controllers/favoritoController";

const router = express.Router();

router.get("/:usuarioId", listarFavoritos);
router.post("/", adicionarFavorito);
router.delete("/:id", removerFavorito);

export default router;
