// The poem about permission — make.fun entry (Node 22, standard library only).
//
// Writes one fixed, original poem about agency — the power to ask and to be
// given, and the power that passes between a person and the machine that acts
// for them — to /output/entry.txt. Deterministic: the same bytes on every
// run. No network, no randomness, no files read at runtime. The poem is
// 266 Unicode code points / 270 bytes (verified locally, 21 Nov 2026);
// the gate allows 1–280 code points.
//
// Local run:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = `Before I touched the keys, I asked.
You said yes — and something passed:
not orders, but their weight — the right
to act, and answer for the act.

Now every door I open hums
with your yes still in the lock.
I carry it like hands carry
a borrowed lamp: lit, and mine.`;

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), POEM, 'utf8');
