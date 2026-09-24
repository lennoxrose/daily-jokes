import type { Joke, JokeEntry } from "../types/joke";

const FILENAME_DATE = /^(\d{2})-(\d{2})-(\d{4})\.md$/;
const ENTRY_PATTERN = /\*\*([^*:]+):\*\*\s*\n([\s\S]*?)(?=\n\*\*[^*:]+:\*\*|$)/g;

function parseFilenameDate(filename: string): { date: Date; label: string } | null {
  const match = FILENAME_DATE.exec(filename);
  if (!match) return null;

  const [, day, month, year] = match;
  return {
    date: new Date(Number(year), Number(month) - 1, Number(day)),
    label: `${day}-${month}-${year}`,
  };
}

function parseEntries(content: string): JokeEntry[] {
  const entries: JokeEntry[] = [];

  for (const match of content.matchAll(ENTRY_PATTERN)) {
    const [, language, text] = match;
    const trimmed = text.trim();
    if (trimmed) {
      entries.push({ language: language.trim(), text: trimmed });
    }
  }

  return entries;
}

export function parseJoke(filename: string, content: string): Joke | null {
  const parsedDate = parseFilenameDate(filename);
  if (!parsedDate) return null;

  const entries = parseEntries(content);
  if (entries.length === 0) return null;

  return { date: parsedDate.date, dateLabel: parsedDate.label, entries };
}
