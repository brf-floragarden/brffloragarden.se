// Listar filer automatiskt ur mapparna, så att en ny årsredovisning eller
// ritning bara behöver laddas upp – ingen lista att uppdatera för hand.
import { readdirSync } from "node:fs";

const list = (dir) =>
  readdirSync(new URL(`../filer/${dir}/`, import.meta.url))
    .filter((f) => !f.startsWith("."))
    .sort((a, b) => a.localeCompare(b, "sv"));

export default function () {
  // Filnamnsformat: arsredovisning-ÅÅÅÅ.pdf
  const arsredovisningar = list("arsredovisningar")
    .map((fil) => ({ fil, ar: fil.match(/(\d{4})/)?.[1] }))
    .filter((r) => r.ar)
    .sort((a, b) => b.ar - a.ar);

  const ritningar = list("ritningar").map((fil) => ({
    fil,
    titel: fil.replace(/\.[^.]+$/, ""),
  }));

  return { arsredovisningar, ritningar };
}
