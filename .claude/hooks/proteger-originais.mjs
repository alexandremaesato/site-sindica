// PreToolUse (Write|Edit|MultiEdit): impede alterar o material original da campanha.
import { readFileSync } from "node:fs";
import path from "node:path";

const input = JSON.parse(readFileSync(0, "utf8") || "{}");
const filePath = input.tool_input?.file_path;
if (!filePath) process.exit(0);

const nome = path.basename(filePath);
const originais = [/^chat\.txt$/i, /^Resumo_Proposta_.*\.pdf$/i, /^WhatsApp Image .*\.jpe?g$/i];

if (originais.some((re) => re.test(nome))) {
  console.error(`"${nome}" é material original da campanha e é somente leitura. ` +
    "Leve o conteúdo para content/conteudo-base.md em vez de editar o original.");
  process.exit(2);
}
