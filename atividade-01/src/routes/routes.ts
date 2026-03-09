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
        { autor: "Eren Jaeger", citacao: "Não se pode esperar um final feliz de uma história de terror!" },
        { autor: "Armin Arlert", citacao: "Alguém que não pode fazer sacrifícios nunca pode mudar nada." }
        { autor: "Albert Einstein", citacao: "A vida é como andar de bicicleta. Para manter o equilíbrio, você deve continuar se movendo." },
        { autor: "Albert Einstein", citacao: "Deus não joga dados com o universo." },
        { autor: "Isaac Newton", citacao: "Se vi mais longe, foi por estar sobre ombros de gigantes." },
        { autor: "Isaac Newton", citacao: "A verdade é sempre encontrada na simplicidade, e não na multiplicidade e confusão das coisas." },
        { autor: "Marie Curie", citacao: "Nada na vida deve ser temido, apenas compreendido." },
        { autor: "Marie Curie", citacao: "Devemos ter perseverança e, acima de tudo, confiança em nós mesmos." },
        { autor: "Stephen Hawking", citacao: "A inteligência é a capacidade de se adaptar à mudança." },
        { autor: "Stephen Hawking", citacao: "Olhe para as estrelas e não para os seus pés." },
        { autor: "Stephen Hawking", citacao: "O maior inimigo do conhecimento não é a ignorância, mas a ilusão do conhecimento." },
        { autor: "Galileu Galilei", citacao: "Eppur si muove." },
        { autor: "Galileu Galilei", citacao: "Não se pode ensinar nada a um homem; apenas ajudá-lo a encontrar dentro de si mesmo." },
        { autor: "Charles Darwin", citacao: "Não é a espécie mais forte que sobrevive, nem a mais inteligente, mas a que melhor se adapta às mudanças." },
        { autor: "Charles Darwin", citacao: "Ignorância gera confiança com mais frequência do que o conhecimento." },
        { autor: "Nikola Tesla", citacao: "O presente é deles; o futuro, pelo qual eu realmente trabalhei, é meu." },
        { autor: "Nikola Tesla", citacao: "Se você quiser descobrir os segredos do universo, pense em termos de energia, frequência e vibração." },
        { autor: "Richard Feynman", citacao: "O que não posso criar, não entendo." },
        { autor: "Richard Feynman", citacao: "A ciência é a crença na ignorância dos especialistas." },
        { autor: "Carl Sagan", citacao: "Somos feitos de matéria estelar." },
        { autor: "Carl Sagan", citacao: "Em algum lugar, algo incrível está esperando para ser descoberto." },
        { autor: "Carl Sagan", citacao: "A ausência de evidência não é evidência de ausência." },
        { autor: "Johannes Kepler", citacao: "A geometria é única e eterna, um reflexo da mente de Deus." },
        { autor: "Johannes Kepler", citacao: "A astronomia é filha da humildade." },
        { autor: "Niels Bohr", citacao: "Previsões são muito difíceis, especialmente sobre o futuro." },
        { autor: "Niels Bohr", citacao: "Um especialista é alguém que cometeu todos os erros possíveis em um campo muito estreito." },
        { autor: "Max Planck", citacao: "A ciência avança de funeral em funeral." },
        { autor: "Max Planck", citacao: "Uma nova verdade científica não triunfa convencendo seus oponentes, mas porque seus oponentes eventualmente morrem." },
        { autor: "Rosalind Franklin", citacao: "A ciência e a vida não podem ser separadas." },
        { autor: "Michael Faraday", citacao: "Nada é tão maravilhoso quanto ver a ciência aplicada à vida prática." },
        { autor: "Erwin Schrödinger", citacao: "O que observamos não é a natureza em si, mas a natureza exposta ao nosso método de questionamento." }
    ];
    const randomIndex = Math.floor(Math.random() * citacoes.length);
    res.json(citacoes[randomIndex]);
});

export default router;