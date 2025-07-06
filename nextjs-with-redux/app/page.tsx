import type { Metadata } from "next";
import { Counter } from "./components/counter/Counter";
import Greeting from "./components/Greeting";
import TodoListDemo from "./components/todos/TodoListDemo";
import OurCounter from "./components/OurCounter";
import CounterWithReducer from "./components/CounterWithReducer";
import CallBackDemo from "./components/CallBackDemo";
import AcceptElementDemo from "./components/AcceptElementDemo";
import SimpleCounter from "./components/simplecounter/SimpleCounter";
import TodoListWithRedux from "./components/todo/TodoListWithRedux";

export default function IndexPage() {
  return (
    <div>
      {/* <Counter /> */}
      {/* <Greeting msg={"hello"} /> */}
      {/* <TodoListDemo /> */}
      {/* <OurCounter /> */}
      {/* <CounterWithReducer /> */}
      {/* <CallBackDemo /> */}
      {/* <AcceptElementDemo /> */}
      {/* <SimpleCounter /> */}
      <TodoListWithRedux />
    </div>
  )
}

export const metadata: Metadata = {
  title: "Redux Toolkit",
};
