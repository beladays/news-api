import { Request, Response } from "express";
import prisma from "../prisma";

export const listarNoticias = async (req: Request, res: Response) => {
  const noticias = await prisma.noticia.findMany();
  res.json(noticias);
};

export const criarNoticia = async (req: Request, res: Response) => {
  const { titulo, descricao, urlImagem, conteudo } = req.body;
  try {
    const noticia = await prisma.noticia.create({
      data: { titulo, descricao, urlImagem, conteudo },
    });
    res.json(noticia);
  } catch (error) {
    res.status(400).json({ error: "Erro ao criar notícia" });
  }
};
