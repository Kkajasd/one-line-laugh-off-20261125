import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I asked my GPS for the scenic route, so it drove me past my ex's house twice and called it closure.";

if (ENTRY.length === 0 || ENTRY.length > 200 || ENTRY.includes("\n")) {
  throw new Error("ENTRY must be a single line of 1-200 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
