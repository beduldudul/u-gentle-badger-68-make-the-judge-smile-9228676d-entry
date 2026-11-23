// Make the Judge Smile — one line about a small good thing today.
// Writes the entry to /output/entry.txt (gate: 1-200 chars UTF-8).
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "This morning at 6:40 the bus driver waited ten extra seconds for an old man running with his cane — and the whole bus, all of us strangers, broke into applause.";

// Gate guard: the entry must be 1-200 characters, not only whitespace.
if (line.length < 1 || line.length > 200 || !line.trim()) {
  throw new Error(`entry line is ${line.length} chars, outside the 1-200 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(`wrote ${line.length} chars to /output/entry.txt`);
