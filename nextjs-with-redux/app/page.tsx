import type { Metadata } from "next";
import { Counter } from "./components/counter/Counter";
import Greeting from "./components/Greeting";
import TodoList from "./components/TodoList";

export default function IndexPage() {
  return (
    <div>
      {/* <Counter /> */}
      {/* <Greeting msg={"hello"} /> */}
      <TodoList />
    </div>
  )
}

export const metadata: Metadata = {
  title: "Redux Toolkit",
};
