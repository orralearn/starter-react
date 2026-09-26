// Your tests for pure functions (no page, no React). Run them with: node tests.ts
// Tests of components go in files ending in .test.tsx, run with: npm test
import { nextId } from "./src/list.ts";
import { test } from "./src/test.ts";

test("nextId of an empty list", nextId([]), 1);
test("nextId after ids 3 and 7", nextId([{ id: 3 }, { id: 7 }]), 8);
