import { Box } from "@mui/material";
import styles from "./page.module.css";
import TodoList from "./components/todos/TodoList";

export default function Home() {
  return (
    <Box className={styles.page}>
      {/* <CounterUI /> */}

      <TodoList />
    </Box>
  );
}
