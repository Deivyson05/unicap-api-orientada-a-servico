import { Router } from "express";
import { Request, Response } from "express";
import path from "path";
import { fileURLToPath } from "url";

const router = Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

router.get("/", (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.get("/random", (req: Request, res: Response) => {
    res.json({ number: Math.floor(Math.random() * 100) + 1 });
});

router.get("/dado", (req: Request, res: Response) => {
    res.json({ number: Math.floor(Math.random() * 6) + 1 });
});

router.get("/citacoes", (req: Request, res: Response) => {
    const citacoes = [
        { autor: "Albert Einstein", citacao: "A imaginação é mais importante que o conhecimento." },
        { autor: "Isaac Newton", citacao: "Se vi mais longe foi por estar sobre ombros de gigantes." },
        { autor: "Galileu Galilei", citacao: "E pur si muove." },
        { autor: "Nikola Tesla", citacao: "Nunca desista dos seus sonhos." },
        { autor: "Eren Jaeger", citacao: "Lute! Lute! Lute!" },
        { autor: "Eren Jaeger", citacao: "Se você vencer, vai viver. Se perder, vai morrer. Se você não lutar, não vai conseguir vencer!" },
        { autor: "Eren Jaeger", citacao: "Não se pode esperar um final feliz de uma história de terror!"},
        { autor: "Armin Arlert", citacao: "Alguém que não pode fazer sacrifícios nunca pode mudar nada."}

    ];
    const randomIndex = Math.floor(Math.random() * citacoes.length);
    res.json(citacoes[randomIndex]);
});

export default router;