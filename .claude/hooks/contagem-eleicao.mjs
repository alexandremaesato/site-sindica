// SessionStart: lembra quantos dias faltam para a eleição (o texto entra no contexto).
const ELEICAO = new Date("2026-11-23T00:00:00-03:00"); // a confirmar
const hoje = new Date();
const dias = Math.ceil((ELEICAO - hoje) / 86400000);

if (dias > 0) {
  console.log(`Campanha Cleunice Novak: faltam ${dias} dia(s) para a eleição (23/11/2026, a confirmar). Priorize o que vai ao ar antes disso.`);
} else if (dias === 0) {
  console.log("Campanha Cleunice Novak: hoje é o dia da eleição.");
} else {
  console.log("Campanha Cleunice Novak: a eleição já passou; considere trocar o site por uma mensagem de agradecimento.");
}
