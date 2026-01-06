import { Box } from "@mui/material";
import styles from "./page.module.css";
import TodoList from "./components/todos/TodoList";
import CounterUI from "./components/counter/CounterUI";
import AlertWrapper from "./components/todos/AlertWrapper";

export default function Home() {
  return (
    <Box className={styles.page}>
      {/* <CounterUI /> */}

      <TodoList />
      {/* <AlertWrapper /> */}
    </Box>
  );
}
