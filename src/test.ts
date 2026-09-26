// Made for you: test(label, actual, expected) prints PASS or FAIL,
// like Level 2's test(). Run your tests with: node tests.ts
export function test(label: string, actual: unknown, expected: unknown): void {
  const a = JSON.stringify(actual);
  const e = JSON.stringify(expected);
  if (a === e) {
    console.log(`PASS ${label}`);
  } else {
    console.log(`FAIL ${label}: expected ${e}, got ${a}`);
  }
}
