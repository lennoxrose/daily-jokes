import type { Joke } from "../types/joke";
import { JokeCard } from "./JokeCard";
import styles from "./JokeFeed.module.css";

interface JokeFeedProps {
  jokes: Joke[];
}

export function JokeFeed({ jokes }: JokeFeedProps) {
  if (jokes.length === 0) {
    return <p className={styles.empty}>No jokes yet.</p>;
  }

  return (
    <div className={styles.feed}>
      {jokes.map((joke, index) => (
        <div key={joke.dateLabel}>
          {index > 0 && <div className={styles.divider} />}
          <JokeCard joke={joke} />
        </div>
      ))}
    </div>
  );
}
