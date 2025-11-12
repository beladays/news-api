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

export const getNoticiaById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const noticia = await prisma.noticia.findUnique({
    where: { id: Number(id) },
  });

  if (!noticia) {
    return res.status(404).json({ error: "Notícia não encontrada" });
  }

  res.json(noticia);
};

