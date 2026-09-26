// The only file that talks to the server. Today the server is the
// pretend one in fake-server.ts. If your project gets a real server,
// only this file changes (fetch instead of fakeFetch).
import { fakeFetch } from "./fake-server.ts";

export type Note = { id: number; text: string };

export async function getNotes(): Promise<Note[]> {
  const response = await fakeFetch("/notes");
  if (!response.ok) {
    throw new Error(`The server answered ${response.status}`);
  }
  const notes: Note[] = await response.json();
  return notes;
}

export async function addNote(text: string): Promise<Note> {
  const response = await fakeFetch("/notes", {
    method: "POST",
    body: JSON.stringify({ text }),
  });
  if (!response.ok) {
    throw new Error(`The server answered ${response.status}`);
  }
  const note: Note = await response.json();
  return note;
}
