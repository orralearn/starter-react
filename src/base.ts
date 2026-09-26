// Made for you: the site's address on GitHub Pages.
export const BASE = import.meta.env.BASE_URL;
export function asset(path: string): string {
  return BASE + path;
}
