import { Request, Response } from "express";
import prisma from "../prisma";

export const listarFavoritos = async (req: Request, res: Response) => {
  const { usuarioId } = req.params;
  const favoritos = await prisma.favorito.findMany({
    where: { usuarioId: Number(usuarioId) },
    include: { noticia: true },
  });
  res.json(favoritos);
};

export const adicionarFavorito = async (req: Request, res: Response) => {
  const { usuarioId, noticiaId } = req.body;
  const favorito = await prisma.favorito.create({
    data: { usuarioId, noticiaId },
  });
  res.json(favorito);
};

export const removerFavorito = async (req: Request, res: Response) => {
  const { id } = req.params;
  await prisma.favorito.delete({ where: { id: Number(id) } });
  res.json({ message: "Favorito removido com sucesso" });
};
