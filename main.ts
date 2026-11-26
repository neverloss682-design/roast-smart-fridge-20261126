// Roast the Smart Fridge — one-line entry generator.
// Writes the entry text to <outputDir>/entry.txt (default "/output").
// The entry is a single line, at most 160 characters.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "My fridge has a touchscreen bigger than my first TV, and all I use it for is staring at photos of food I can't afford.";

// The output directory defaults to the absolute "/output" the grader uses;
// a first CLI argument may override it for local testing.
const outDir = process.argv[2] ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`wrote ${join(outDir, "entry.txt")} (${ENTRY.length} chars)`);
