# Plano do site – Cleunice Novak para Síndica

Condomínio Residencial Serra Azul · Eleição prevista para **segunda-feira, 23/11/2026** (data, horário e local **a confirmar**).

## 1. Objetivo

Ser um link curto e fácil de compartilhar pelo WhatsApp que apresente, em poucos minutos de leitura no celular:

1. quem é a Cleunice;
2. o que ela propõe (e o que **não** promete);
3. o plano dos primeiros seis meses;
4. como o morador pode participar, apoiar e votar.

Indicadores de sucesso: o link é aberto a partir dos grupos de WhatsApp, a página é lida até as propostas e o botão "Compartilhar no WhatsApp" é usado.

## 2. Público e premissas

| Premissa | Consequência no site |
|---|---|
| Moradores acessam pelo **celular**, vindo do WhatsApp | Mobile-first, página única, carregamento rápido, prévia de link (Open Graph) bonita |
| Há moradores **idosos** | Fonte base ≥ 18 px, alto contraste, botões grandes, sem textos em imagem |
| Prazo de **poucos dias** até a eleição | Site estático, sem build, sem backend, sem banco de dados |
| Assunto interno do condomínio | `noindex` (não aparecer no Google), nenhum dado de outros moradores |
| Campanha sem ataques | Tom propositivo; nunca citar a gestão atual ou concorrentes pelo nome |

## 3. Escopo da candidatura (decisão do cliente)

O site apresenta **somente a Cleunice Novak** como candidata a síndica. Os materiais originais (PDF, artes e mensagem do grupo) citam uma chapa com outra pessoa; esse nome, o cargo de subsíndica e a palavra "chapa" **não** aparecem no site. As artes atuais **não podem ser reaproveitadas** como estão, porque trazem o nome da chapa.

A mensagem do grupo (`chat.txt`) foi escrita em primeira pessoa por outra pessoa; usamos apenas as **ideias** (construção coletiva, campanha sem ataques, participação), reescritas.

## 4. Mapa da página (one-page)

| # | Seção (âncora) | Conteúdo | Fonte |
|---|---|---|---|
| 0 | Cabeçalho fixo | "Cleunice Novak · Síndica" + menu âncora + botão "Compartilhar" | – |
| 1 | `#inicio` Hero | **Cleunice Novak para Síndica** · "Mais transparência. Mais participação. Melhor gestão." · contagem regressiva até a eleição · CTAs "Ver propostas" e "Compartilhar no WhatsApp" | PDF, arte 1 |
| 2 | `#problemas` Cansado dos mesmos problemas? | 4 cartões: goteiras e infiltrações, alagamento na garagem, pombos, pedidos sem resposta → "Com um plano real e responsável, vamos…" | arte 2 |
| 3 | `#quem-sou` Quem é a Cleunice | Servidora pública federal desde 2012, contadora, pós-graduada em Controladoria, mestranda; já foi síndica e conselheira; foco em planejamento, controle financeiro e contratos. Foto (pendente) | PDF |
| 4 | `#compromissos` Seis compromissos | Grade 2×3 com ícones: Transparência, Responsabilidade financeira, Participação, Eficiência administrativa, Valorização do patrimônio, Respeito e imparcialidade | PDF, arte 1 |
| 5 | `#propostas` Propostas | Acordeões (`<details>`) por tema: Transparência e organização · Finanças · Segurança · Garagens, infraestrutura e lazer · Acessibilidade · Limpeza e manutenção · Valorização do patrimônio | PDF |
| 6 | `#seis-meses` Primeiros seis meses | Linha do tempo: 1–30 dias diagnóstico · 31–60 apresentação e contratos · 61–90 propostas de Convenção/Regimento · 4º–6º mês assembleias, execução e prestação de contas | PDF |
| 7 | Faixa "Sem promessas impossíveis" | Diagnóstico → custos e alternativas → decisão com os moradores, sem transferir continuamente novos custos | PDF |
| 8 | `#participe` Participe | "Uma mudança de verdade se constrói com muitas pessoas": converse com seu vizinho, compartilhe o link, envie sugestões (botão WhatsApp), venha votar | chat.txt (ideias) |
| 9 | Rodapé | "Um condomínio melhor se constrói com todos!" · data/local da eleição · aviso de que é material de campanha | PDF |

Seção opcional (fase 2, se houver tempo): **Perguntas frequentes** (ex.: "Vai aumentar a taxa?" → resposta baseada em "sem transferir continuamente novos custos").

## 5. Identidade visual

Herdada das artes existentes para manter reconhecimento:

- Azul principal `#1F4E79`, azul escuro `#163A5C`, azul claro de fundo `#DCE6F1`, verde de ação `#2E9E4F` (botão votar/compartilhar), amarelo de destaque `#F5C518` com moderação.
- Tipografia: **Montserrat** (títulos, 700/800) + **Open Sans** (texto) via Google Fonts, com fallback do sistema.
- Ícones em SVG inline (lupa, moedas, pessoas, engrenagem, gráfico, aperto de mão, gota, carro, pássaro, balão de conversa).
- Ilustração: prédio estilizado em SVG; sem imagens geradas que contenham texto.

## 6. Arquitetura técnica

- **HTML + CSS + JS puros**, sem framework nem build. Um único `site/index.html`.
- `site/css/styles.css` com variáveis CSS (tokens acima), mobile-first, breakpoint em 768 px.
- `site/js/main.js` (pequeno): contagem regressiva, menu, botão compartilhar (`https://wa.me/?text=…` e `navigator.share` quando disponível).
- Acordeões com `<details>/<summary>` (funcionam sem JS).
- Meta tags: `og:title`, `og:description`, `og:image` (1200×630, `site/assets/og.png`), `robots=noindex,nofollow`, `lang="pt-BR"`.
- Sem cookies, sem analytics de terceiros (se quiserem métrica: contador simples e sem rastreio, ex.: GoatCounter — decisão pendente).
- Servidor local: `npx serve site`.
- Hospedagem sugerida: **Netlify Drop** ou **GitHub Pages** (gratuitos; deploy em minutos). Domínio próprio é opcional.

```
Site Sindica/
├── CLAUDE.md
├── docs/PLANO_DO_SITE.md          ← este arquivo
├── content/conteudo-base.md       ← fonte única de textos aprovados
├── site/
│   ├── index.html
│   ├── css/styles.css
│   ├── js/main.js
│   └── assets/ (og.png, foto-cleunice.jpg, ícones)
├── .claude/ (settings, hooks, skills, agents)
└── material original (chat.txt, PDF, imagens do WhatsApp) – somente leitura
```

## 7. Cronograma (até a eleição)

| Quando | Entrega |
|---|---|
| Qua 18/11 | Plano aprovado, pendências respondidas |
| Qui 19/11 | Primeira versão completa no ar (link de prévia) |
| Sex 20/11 | Revisão da Cleunice, ajustes de texto, foto, imagem de compartilhamento |
| Sáb 21/11 | Versão final publicada e divulgada nos grupos |
| Dom 22/11 | Lembrete "amanhã tem eleição" (faixa no topo) |
| Seg 23/11 | Dia da eleição; depois, faixa de agradecimento |

## 8. Pendências (precisam de resposta da Cleunice)

1. **Data, horário e local** exatos da assembleia de eleição.
2. **Foto** da Cleunice (e autorização de uso).
3. **WhatsApp** para receber sugestões (ou só o botão de compartilhar?).
4. Haverá **subsíndico(a)** ou conselho a apresentar? (Por ora o site mostra apenas a Cleunice.)
5. Manter a seção **"Cansado dos mesmos problemas?"** com goteiras, alagamentos e pombos? Ela vem da arte, mas não consta no Plano de Gestão em PDF — sugerimos falar em "diagnosticar e priorizar" em vez de "resolver", para respeitar o "sem promessas impossíveis".
6. Hospedagem/domínio preferidos.
7. Revisão final de todos os textos pela Cleunice antes de publicar.

## 9. Riscos e cuidados

- **Nome errado**: a mensagem do grupo escreve "Cleonice"; o correto (PDF) é **Cleunice Novak**. Um hook bloqueia a grafia errada.
- **Nome da antiga parceira de chapa** reaparecendo ao copiar trechos dos materiais: bloqueado por hook e verificado pelo agente revisor.
- **Promessas além do plano**: todo texto novo deve ter base em `content/conteudo-base.md`.
- **Privacidade (LGPD)**: não publicar nomes, apartamentos, telefones ou fotos de outros moradores, nem prints de conversas.
- **Tom**: nada de ataques à gestão atual ou a outras candidaturas.
