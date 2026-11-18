---
name: nova-secao
description: Passo a passo para criar ou alterar uma seção do site de campanha (site/index.html + styles.css). Use quando for adicionar, reordenar ou redesenhar seções como hero, propostas, linha do tempo, participe ou FAQ.
---

# Criar ou alterar uma seção

1. **Conteúdo primeiro.** Confirme que o texto existe em `content/conteudo-base.md`. Se não existir, acrescente lá com a origem e "A CONFIRMAR". Aplique a skill `tom-de-voz`.
2. **Posição.** Siga a ordem do mapa em `docs/PLANO_DO_SITE.md` (seção 4). Se mudar a ordem, atualize o plano.
3. **Marcação** (padrão):
   ```html
   <section id="kebab-case" class="secao secao--variante" aria-labelledby="kebab-case-titulo">
     <div class="container">
       <h2 id="kebab-case-titulo" class="secao__titulo">Título</h2>
       <!-- conteúdo -->
     </div>
   </section>
   ```
   - Um único `<h1>` (no hero). Seções usam `<h2>`, itens `<h3>`.
   - Listas de propostas: `<details><summary>Tema</summary><ul>…</ul></details>`.
   - Ícones: SVG inline com `aria-hidden="true"`; o texto ao lado carrega o significado.
   - Imagens: `alt` descritivo, `width`/`height`, `loading="lazy"` (exceto no hero).
4. **Estilo.** Classes BEM em português (`.secao`, `.cartao`, `.linha-tempo__item`). Use só os tokens de `:root` (cores, espaçamentos, raios). Mobile-first; ajuste em `@media (min-width: 768px)`.
5. **Menu.** Se a seção for navegável, adicione o link âncora no cabeçalho.
6. **JS.** Só se indispensável, em `site/js/main.js`, e a seção precisa funcionar sem ele.
7. **Verificar.** `npx serve site`, abrir no navegador em 375 px e 1280 px de largura, conferir que não há rolagem horizontal, que o texto tem ≥ 18 px e que os botões têm ≥ 44 px de altura.
8. Ao terminar um conjunto de seções, rode os agents `revisor-campanha` e `auditor-acessibilidade`.
