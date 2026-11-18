// PostToolUse (Write|Edit|MultiEdit): verifica arquivos em site/ e content/.
// Saída 2 devolve o problema ao Claude para correção.
import { readFileSync, existsSync } from "node:fs";
import path from "node:path";

const input = JSON.parse(readFileSync(0, "utf8") || "{}");
const filePath = input.tool_input?.file_path;
if (!filePath || !existsSync(filePath)) process.exit(0);

const root = process.env.CLAUDE_PROJECT_DIR || input.cwd || process.cwd();
const rel = path.relative(root, filePath).replace(/\\/g, "/");
if (!/^(site|content)\//.test(rel)) process.exit(0);
if (!/\.(html?|css|js|mjs|md|json|txt|svg)$/i.test(rel)) process.exit(0);

const regras = [
  [/fernanda|marchione/i, "Nome da antiga parceira de chapa: o site apresenta apenas a Cleunice."],
  [/subs[ií]ndic[oa]/i, "Cargo de subsíndico(a) não deve aparecer (a candidatura é só da Cleunice)."],
  [/\bchapas?\b/i, "Use 'candidatura' em vez de 'chapa'."],
  [/cleonice/i, "Grafia errada: o correto é 'Cleunice'."],
  [/\(\d{2}\)\s?9?\d{4}-?\d{4}|\bap(to|artamento)\.?\s*\d{2,4}\b/i,
    "Possível telefone ou número de apartamento: confirme que não é dado pessoal de morador (LGPD)."],
];

const linhas = readFileSync(filePath, "utf8").split(/\r?\n/);
const problemas = [];
linhas.forEach((linha, i) => {
  for (const [re, msg] of regras) {
    const m = linha.match(re);
    if (m) problemas.push(`${rel}:${i + 1} "${m[0]}" → ${msg}`);
  }
});

if (problemas.length) {
  console.error("Regras de conteúdo da campanha violadas (veja CLAUDE.md):\n" + problemas.join("\n"));
  process.exit(2);
}
