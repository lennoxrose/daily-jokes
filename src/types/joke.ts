export interface JokeEntry {
  language: string;
  text: string;
}

export interface Joke {
  date: Date;
  dateLabel: string;
  entries: JokeEntry[];
}
