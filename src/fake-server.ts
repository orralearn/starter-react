// Made for you: a pretend server inside your page, for projects that
// have no real server yet. Call fakeFetch(path, options) exactly like
// fetch: it answers after 300 to 1200 ms, like a slow connection.
//
// Its data starts from public/data.json, e.g. { "notes": [ ... ] }:
//   GET  /notes    -> the list
//   GET  /notes/3  -> the item with id 3 (404 if there is none)
//   POST /notes    -> saves the body with a new id (201 and the item)
// What you add lasts until the page reloads.
//
// It fails only when "Simulate a bad network" is on (BadNetworkSwitch)
// or the address ends with ?network=bad. Then the 1st, 3rd, 5th...
// request fails (offline, then a server error, in turn), so a reviewer
// can test your error states the same way every time.
import { asset } from "./base.ts";
import { nextId } from "./list.ts";

type Item = { id: number; [field: string]: unknown };
type Tables = { [name: string]: Item[] };

let tables: Tables | null = null;
let requests = 0;

export function badNetwork(): boolean {
  const query = new URLSearchParams(location.search);
  return query.get("network") === "bad" || localStorage.getItem("bad-network") === "on";
}

export function setBadNetwork(on: boolean): void {
  localStorage.setItem("bad-network", on ? "on" : "off");
}

function wait(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function answer(status: number, body: unknown): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

async function loadTables(): Promise<Tables> {
  if (tables === null) {
    const response = await fetch(asset("data.json"));
    const data: Tables = await response.json();
    tables = data;
  }
  return tables;
}

export async function fakeFetch(path: string, options: RequestInit = {}): Promise<Response> {
  await wait(300 + Math.random() * 900);
  requests += 1;
  if (badNetwork() && requests % 2 === 1) {
    if (requests % 4 === 1) {
      throw new TypeError("Failed to fetch");
    }
    return answer(500, { error: "Server error" });
  }

  const [name = "", idText] = path.replace(/^\//, "").split("/");
  const data = await loadTables();
  const list = data[name];
  if (list === undefined) {
    return answer(404, { error: `No ${name} on this server` });
  }
  const method = (options.method ?? "GET").toUpperCase();
  if (method === "GET" && idText === undefined) {
    return answer(200, list);
  }
  if (method === "GET") {
    const item = list.find((x) => x.id === Number(idText));
    if (item === undefined) {
      return answer(404, { error: "Not found" });
    }
    return answer(200, item);
  }
  if (method === "POST") {
    const body: { [field: string]: unknown } = JSON.parse(String(options.body ?? "{}"));
    const item: Item = { ...body, id: nextId(list) };
    list.push(item);
    return answer(201, item);
  }
  return answer(405, { error: `${method} is not supported` });
}
