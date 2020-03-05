import { h, FunctionalComponent as FC } from "preact";
import Title from "../../components/Title";
import styles from "./styles.css";

const App: FC = () => (
    <div class={styles.app}>
        <Title title="React/Typescript Starter!" />
    </div>
);

export default App;
