# Site de campanha – Cleunice Novak para Síndica

Site estático de uma página para a candidatura de **Cleunice Novak** a síndica do
**Condomínio Residencial Serra Azul**. Eleição prevista para segunda-feira, 23/11/2026 (a confirmar).

- Plano completo: `docs/PLANO_DO_SITE.md`
- Textos aprovados (fonte única): `content/conteudo-base.md`
- Código do site: `site/` (HTML + CSS + JS puros, sem build)

## Regras de conteúdo (inegociáveis)

1. **Apenas a Cleunice.** O site apresenta somente a Cleunice Novak como candidata a síndica.
   Os materiais originais citam uma chapa com outra pessoa (Fernanda Marchione, subsíndica):
   esse nome, o cargo "subsíndica" e a palavra "chapa" **não** podem aparecer em `site/` nem em `content/`.
   O hook `verificar-conteudo` bloqueia isso.
2. **Grafia correta:** "Cleunice Novak" (nunca "Cleonice", grafia que aparece na mensagem do grupo).
3. **Nada de inventar.** Fatos, currículo e propostas só a partir de `content/conteudo-base.md`.
   Precisa de algo novo? Acrescente primeiro no conteúdo base com a origem e marque como "A CONFIRMAR".
4. **Sem promessas impossíveis.** Use "estudar", "avaliar", "diagnosticar", "decidir com os moradores"
   quando o plano disser isso. Não prometa redução de taxa nem obras com prazo.
5. **Sem ataques.** Não citar a gestão atual, a administradora ou outras candidaturas de forma negativa.
6. **Privacidade (LGPD).** Nenhum nome, apartamento, telefone, foto ou print de outros moradores.
7. `chat.txt` foi escrito em primeira pessoa por outra pessoa: use apenas as ideias, nunca trechos literais.

## Material original (somente leitura)

`chat.txt`, `Resumo_Proposta_Chapa_Cleunice_e_Fernanda.docx.PDF` e `WhatsApp Image *.jpeg`.
Não editar, mover nem apagar (o hook `proteger-originais` bloqueia edição). As artes trazem o nome
da chapa e **não** podem ser publicadas no site.

## Padrões técnicos

- Mobile-first; fonte base ≥ 18 px; contraste AA; alvos de toque ≥ 44 px; público inclui idosos.
- Um único `site/index.html`, `site/css/styles.css` (tokens em `:root`), `site/js/main.js` pequeno.
- Seções com `id` em kebab-case (`#inicio`, `#problemas`, `#quem-sou`, `#compromissos`,
  `#propostas`, `#seis-meses`, `#participe`). Acordeões com `<details>/<summary>`.
- O site deve funcionar sem JavaScript (JS só melhora: contagem regressiva, compartilhar).
- `lang="pt-BR"`, `<meta name="robots" content="noindex,nofollow">`, Open Graph completo para o WhatsApp.
- Sem cookies, sem rastreadores de terceiros, sem dependências npm.
- Cores: `--azul #1F4E79`, `--azul-escuro #163A5C`, `--azul-claro #DCE6F1`, `--verde #1E7B3A` (versão escura do verde #2E9E4F das artes, para contraste AA com texto branco), `--amarelo #F5C518`.
- Fontes: Montserrat (títulos) e Open Sans (texto) via Google Fonts.
- Textos do site em português do Brasil, com acentuação correta.

## Comandos

- Servir localmente: `npx serve site` (abre em http://localhost:3000)
- Publicar: ver skill `/publicar`

## Skills e agents do projeto

- Skills: `/tom-de-voz` (como escrever), `/nova-secao` (criar/alterar seção), `/publicar` (checklist e deploy).
- Agents: `redator-campanha` (escreve textos), `revisor-campanha` (confere fidelidade e regras),
  `auditor-acessibilidade` (mobile, contraste, idosos). Rode o revisor e o auditor antes de publicar.
