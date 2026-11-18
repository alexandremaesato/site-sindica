// Melhorias progressivas: o site funciona sem este arquivo.
(function () {
  "use strict";

  // Contagem regressiva até a eleição (data em <body data-eleicao>)
  var alvo = new Date(document.body.dataset.eleicao);
  var saida = document.querySelector(".js-contagem");
  if (saida && !isNaN(alvo)) {
    var hoje = new Date(); hoje.setHours(0, 0, 0, 0);
    var dia = new Date(alvo); dia.setHours(0, 0, 0, 0);
    var dias = Math.round((dia - hoje) / 86400000);
    if (dias > 1) saida.textContent = "Faltam " + dias + " dias";
    else if (dias === 1) saida.textContent = "É amanhã!";
    else if (dias === 0) saida.textContent = "É hoje! Venha votar.";
    else saida.textContent = "Obrigada a todos que participaram!";
  }

  // Compartilhar: usa o menu nativo do celular quando existe; senão, abre o WhatsApp com o link da página
  var texto = "Conheça as propostas da Cleunice Novak para síndica do Serra Azul: mais transparência, mais participação e melhor gestão.";
  var url = location.protocol.indexOf("http") === 0 ? location.href.split("#")[0] : "";
  var linkWhats = "https://wa.me/?text=" + encodeURIComponent(texto + (url ? " 👉 " + url : ""));

  document.querySelectorAll(".js-compartilhar").forEach(function (botao) {
    botao.href = linkWhats;
    botao.addEventListener("click", function (e) {
      if (navigator.share && url && matchMedia("(pointer: coarse)").matches) {
        e.preventDefault();
        navigator.share({ title: "Cleunice Novak para Síndica", text: texto, url: url }).catch(function () {});
      }
    });
  });
})();
