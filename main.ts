// One Star for Monday — a one-star review of Monday, written as though
// Monday were a restaurant. Writes the review line to /output/entry.txt
// (or $MAKEFUN_OUTPUT_DIR/entry.txt when set).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The review itself: one line, plain text, no stage directions.
const ENTRY_LINE =
  "One star. I booked the weekend and got seated at Monday. Cold soup, a sighing waiter, and the bill arrived before the food did.";

// Write the line exactly as-is: no trailing newline, no explanation.
function writeEntry(outDir: string): void {
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), ENTRY_LINE, "utf8");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
writeEntry(outDir);
