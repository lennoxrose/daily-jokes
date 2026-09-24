import type { Joke } from "../types/joke";
import { LanguageEntry } from "./LanguageEntry";
import styles from "./JokeCard.module.css";

interface JokeCardProps {
  joke: Joke;
}

export function JokeCard({ joke }: JokeCardProps) {
  return (
    <article className={styles.card}>
      <time className={styles.date}>{joke.dateLabel}</time>
      <div className={styles.entries}>
        {joke.entries.map((entry) => (
          <LanguageEntry key={entry.language} entry={entry} />
        ))}
      </div>
    </article>
  );
}
