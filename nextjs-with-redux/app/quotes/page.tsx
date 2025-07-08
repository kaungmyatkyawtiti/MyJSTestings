import { Quotes } from "../components/quotes/Quotes";
import TodoListWithRTKQuery from "../components/todo/TodoListWithRTKQuery";

export default function QuotesPage() {
  return (
    <>
      <h1>Quotes page</h1>
      {/* <p>This page is intended to showcase RTK Query.</p> */}
      {/* <Quotes /> */}

      <TodoListWithRTKQuery />
    </>
  );
}
