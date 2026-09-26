import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import tseslint from "typescript-eslint";

// Made for you: `npm run lint` (and the workflow) stops on real mistakes, such as a hook
// inside an `if`. Style advice is a warning, never a failed build.
export default tseslint.config(
  { ignores: ["dist"] },
  {
    files: ["**/*.{ts,tsx}"],
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    languageOptions: { ecmaVersion: 2022, globals: globals.browser },
    plugins: { "react-hooks": reactHooks },
    rules: {
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      // Unused names are grey hints in the editor: they never block a build.
      "@typescript-eslint/no-unused-vars": "warn",
      "prefer-const": "warn",
    },
  },
);
