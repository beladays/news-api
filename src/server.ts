import express from "express";
import dotenv from "dotenv";
import noticiaRoutes from "./routes/noticiaRoutes";
import usuarioRoutes from "./routes/usuarioRoutes";
import favoritoRoutes from "./routes/favoritoRoutes";
import cors from "cors";

dotenv.config();

const app = express();
app.use(express.json());

// Rotas 
app.use("/noticias", noticiaRoutes);
app.use("/auth", usuarioRoutes);
app.use("/favoritos", favoritoRoutes);

// Porta do servidor
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(` Servidor rodando na porta ${port}`));
app.use(cors());