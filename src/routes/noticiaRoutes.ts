import express from "express";
import { listarNoticias, criarNoticia } from "../controllers/noticiaController";
import prisma from "../prisma";

const router = express.Router();

router.get("/", listarNoticias);
router.post("/", criarNoticia);


router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const noticia = await prisma.noticia.findUnique({
      where: { id: Number(id) },
    });
    if (!noticia) return res.status(404).json({ error: "Notícia não encontrada" });
    res.json(noticia);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar notícia" });
  }
});

export default router;