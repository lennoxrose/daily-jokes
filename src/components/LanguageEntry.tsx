import type { JokeEntry } from "../types/joke";
import styles from "./LanguageEntry.module.css";

interface LanguageEntryProps {
  entry: JokeEntry;
}

export function LanguageEntry({ entry }: LanguageEntryProps) {
  return (
    <div className={styles.entry}>
      <span className={styles.label}>{entry.language}</span>
      <p className={styles.text}>{entry.text}</p>
    </div>
  );
}
