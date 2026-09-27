# My React app

Made from the Orralearn **starter-react** template (Level 3, projects P2 to P6): React,
TypeScript, React Router, Vitest and Testing Library, ESLint, published by GitHub Actions.

**Live site:** add your link here (Settings → Pages shows it).

## Start on a phone (Termux)

Once per phone, in Termux:

```bash
pkg install nodejs git gh
gh auth login
```

For each project (here `my-menu`), on Wi-Fi if you can:

```bash
gh repo create my-menu --template orralearn/starter-react --public --clone
cd my-menu
npm install --prefer-offline
npm run dev
```

Then open Chrome on the same phone at http://localhost:5173. To stop `npm run dev`, press
**CTRL** then **C** in Termux (the CTRL key is on Termux's extra keys row). On GitHub, once:
**Settings → Pages → Source: GitHub Actions**, so each `git push` publishes your app.

## Commands

Run them in this folder (`cd` into it first).

| Command | What it does |
|---|---|
| `npm install --prefer-offline` | Installs the tools into `node_modules` (the first time about 90 MB, Wi-Fi is better; later npm reuses its cache). |
| `npm run dev` | Serves the app at http://localhost:5173 while you edit. Save a file: the page updates. |
| `npm run check` | TypeScript checks every file. The dev page still runs with type errors; `check` and `build` don't let them through. |
| `npm run lint` | ESLint looks for React mistakes (a hook inside an `if` stops it; the rest are warnings). |
| `node tests.ts` | Runs the tests of your pure functions (`tests.ts`, with `test()` from `src/test.ts`). Node removes the types first. |
| `npm test` | Runs your Vitest tests (`*.test.ts`, `*.test.tsx`) and watches for changes. `npm test -- --run` runs them once. |
| `npm run build` | Checks the types, then makes the `dist` folder for the web. |

Node must be 22.18 or newer: `node --version`. In Termux, `pkg upgrade nodejs` if it's older.

## Publishing

Every `git push` to `main` runs the workflow (`.github/workflows/pages.yml`): it checks, lints,
tests and builds your app, then publishes `dist`. A pull request gets the same checks but is
never published. The Actions tab shows a green tick when it worked. Once per repository:
**Settings → Pages → Source: GitHub Actions**.

## On a phone

- The **console button** (bottom right, only with `npm run dev`) shows what `console.log`
  prints, your errors and React's warnings: Chrome on Android has no DevTools.
- Chrome on the same phone opens http://localhost:5173 while `npm run dev` runs in Termux.

## Photos and other files

Put them in `public/` (for example `public/images/eru.jpg`) and use `asset` from `src/base.ts`:

```tsx
<img src={asset("images/eru.jpg")} alt="A plate of eru" />
```

On GitHub Pages your site lives under `/my-menu/`, so a plain `/images/eru.jpg` works with
`npm run dev` but breaks once published. `asset("images/eru.jpg")` works in both.

## Data from a "server"

Your published app can't reach the lessons' practice server. Use one of these:

- `public/data.json`, read with `fetch(asset("data.json"))` (`asset` is in `src/base.ts`).
- `src/fake-server.ts`: a pretend server with the same answers as a real one (random delays,
  lists and items from `public/data.json`, new items with ids). `src/api.ts` is the only file
  that talks to it. Put `<BadNetworkSwitch />` in your app, or add `?network=bad` to the
  address, to test your loading and error states.

## Data and storage

- One `npm install` per project, on Wi-Fi. npm keeps a copy in its cache, so later projects
  use `npm install --prefer-offline` and download almost nothing.
- `node_modules` takes 90 MB or more. After publishing, `rm -rf node_modules` frees it: your
  code is safe on GitHub, and `npm install --prefer-offline` brings it back.

## Older phones

On an older 32-bit phone, `npm run build` can stop with an error about **lightningcss** (a
tool with no version for that phone's processor). Open `vite.config.ts` and remove the two
slashes in front of `build: { cssMinify: false },`, save, and build again: your CSS is then
published without being made smaller, which changes nothing you can see.

## Files made for you

| File | |
|---|---|
| `src/main.tsx` | Starts React: the console button, StrictMode, the router and your `App`. |
| `src/base.ts` | The site's address on GitHub Pages: `BASE` and `asset("data.json")`. |
| `src/phone-console.ts` | The console button (development only). |
| `src/list.ts` | `nextId(items)`: the id for a new item. |
| `src/todayISO.ts` | `todayISO()`: today's date in Cameroon, like `"2026-09-26"`. |
| `src/fake-server.ts`, `src/api.ts` | The pretend server, and the one file that talks to it. |
| `src/BadNetworkSwitch.tsx` | "Simulate a bad network". |
| `tests.ts`, `src/test.ts` | Tests of pure functions: `test(label, actual, expected)`, run with `node tests.ts`. |
| `src/test-setup.ts` | Testing Library's matchers for your Vitest tests. |
