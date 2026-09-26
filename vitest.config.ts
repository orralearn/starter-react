import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

// Made for you: tests (*.test.ts, *.test.tsx) run in a pretend browser (jsdom), with
// Testing Library's matchers such as toBeInTheDocument (src/test-setup.ts).
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: ["./src/test-setup.ts"],
  },
});
