import { loadJokes } from "./lib/loadJokes";
import { JokeFeed } from "./components/JokeFeed";
import styles from "./App.module.css";

const jokes = loadJokes();

export function App() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h1 className={styles.title}>Daily Developer Jokes</h1>
      </header>
      <JokeFeed jokes={jokes} />
    </main>
  );
}
