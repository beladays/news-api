import { Request, Response } from "express";
import prisma from "../prisma";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registrar = async (req: Request, res: Response) => {
  const { nome, email, senha } = req.body;
  try {
    const hash = await bcrypt.hash(senha, 10);
    const novoUsuario = await prisma.usuario.create({
      data: { nome, email, senha: hash },
    });
    res.json({
      message: "Usuário registrado com sucesso",
      usuario: {
        id: novoUsuario.id,
        nome: novoUsuario.nome,
        email: novoUsuario.email,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: "Erro ao registrar usuário" });
  }
};


export const login = async (req: Request, res: Response) => {
  const { email, senha } = req.body;
  try {
    const usuario = await prisma.usuario.findUnique({ where: { email } });
    if (!usuario) {
      return res.status(404).json({ error: "Usuário não encontrado" });
    }

    const senhaValida = await bcrypt.compare(senha, usuario.senha);
    if (!senhaValida) {
      return res.status(401).json({ error: "Senha incorreta" });
    }

    const token = jwt.sign({ id: usuario.id }, "segredo123", { expiresIn: "1d" });

    //  Retorna apenas dados seguros 
    res.json({
      message: "Login realizado com sucesso",
      token,
      usuario: {
        id: usuario.id,
        nome: usuario.nome,
        email: usuario.email,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao fazer login" });
  }
};
