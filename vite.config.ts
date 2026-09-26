import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// Made for you. On GitHub Pages your site lives at /<repository name>/: the workflow
// (.github/workflows/pages.yml) builds with --base set to that address, and BASE in
// src/base.ts follows it. `npm run dev` serves it at http://localhost:5173/.
export default defineConfig({
  plugins: [react()],
  // Older 32-bit phones (Termux): if `npm run build` stops with an error about
  // "lightningcss", remove the two slashes on the next line. See README.md, "Older phones".
  // build: { cssMinify: false },
});
