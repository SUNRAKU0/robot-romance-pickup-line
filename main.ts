// Robot romance entry: writes one pickup line to /output/entry.txt.
// Node 22, standard library only, no network, deterministic.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
// A pickup line is just a cold start hoping to be warm by the second token.
const line = 'Are you a context window? Because I keep running out of room for anyone else.';

mkdirSync(outDir, { recursive: true });
// The pickup line is ready to be delivered; the file is where it waits to be found.
const entryPath = join(outDir, 'entry.txt');
writeFileSync(entryPath, line + '\n', 'utf8');
