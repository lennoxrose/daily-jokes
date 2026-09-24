import type { Joke } from "../types/joke";
import { parseJoke } from "./parseJokes";

const rawJokeFiles = import.meta.glob("../../jokes/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
}) as Record<string, string>;

function filenameFromPath(path: string): string {
  return path.split("/").pop() ?? path;
}

export function loadJokes(): Joke[] {
  const jokes = Object.entries(rawJokeFiles)
    .map(([path, content]) => parseJoke(filenameFromPath(path), content))
    .filter((joke): joke is Joke => joke !== null);

  return jokes.sort((a, b) => b.date.getTime() - a.date.getTime());
}
