// Made for you: the id for a new item, 1 more than the largest id
// in the list (1 for an empty list). Ids are computed, never stored.
export function nextId(items: { id: number }[]): number {
  let largest = 0;
  for (const item of items) {
    if (item.id > largest) {
      largest = item.id;
    }
  }
  return largest + 1;
}
