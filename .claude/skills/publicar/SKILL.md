---
name: publicar
description: Checklist final e passos para publicar o site de campanha (Netlify Drop ou GitHub Pages). Use quando o usuário pedir para publicar, colocar no ar, fazer deploy ou gerar o link para compartilhar.
disable-model-invocation: true
---

# Publicar o site

## 1. Checklist (tudo precisa estar ✅)
- [ ] Data, horário e local da eleição confirmados (sem "a confirmar" visível no site).
- [ ] Todos os itens "A CONFIRMAR" de `content/conteudo-base.md` resolvidos ou fora do site.
- [ ] Agent `revisor-campanha` sem pendências bloqueantes.
- [ ] Agent `auditor-acessibilidade` sem pendências bloqueantes.
- [ ] Busca em `site/` sem ocorrências de nomes/termos proibidos (ver CLAUDE.md) e sem "Lorem", "TODO", "XXX".
- [ ] `<title>`, `meta description`, `og:title`, `og:description`, `og:image` (1200×630) preenchidos; `og:image` com URL absoluta após saber o domínio.
- [ ] `robots` = `noindex,nofollow`.
- [ ] Contagem regressiva aponta para a data confirmada.
- [ ] Link do botão "Compartilhar no WhatsApp" testado.
- [ ] Cleunice aprovou a versão final.

## 2. Publicar
**Não publique sem confirmação explícita do usuário** (publicar torna o conteúdo público).

- **Netlify Drop (mais rápido):** o usuário arrasta a pasta `site/` em https://app.netlify.com/drop e recebe o link. Para atualizar, arrasta de novo no mesmo site.
- **GitHub Pages:** repositório com o conteúdo de `site/` na raiz (ou pasta `/docs`), Settings → Pages → branch `main`. Requer `git init` e um remoto — peça autorização antes de criar repositório ou fazer push.

## 3. Depois de publicar
- Atualizar `og:image` e `og:url` com o domínio final e republicar.
- Testar a prévia do link enviando para si mesmo no WhatsApp.
- Entregar ao usuário a mensagem pronta de compartilhamento (ver skill `tom-de-voz`).
