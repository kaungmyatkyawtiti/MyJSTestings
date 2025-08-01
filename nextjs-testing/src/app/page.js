"use client";
//import Image from "next/image";
//import styles from "./page.module.css";

import Card from "./components/Card";
import Counter from "./components/counter/Counter";
import CounterBatchUpdate from "./components/counter/CounterBatchUpdate";
import CounterWithoutState from "./components/counter/CounterWithoutState";
import EventPropagation from "./components/EventPropagation";
import HelloWorld from "./components/HelloWorld";
import Parent, { Child } from "./components/Parent";
import PassFunction from "./components/PassFunction";
import Profile from "./components/Profile";
import PropForward from "./components/PropForward";
import StateArray from "./components/StateArray";
import StateObject from "./components/StateObject";
import Timer from "./components/Timer";
import UITree from "./components/UITree";
import AdminDashboard from "./components/conditional-rendering/AdminDashboard";
import Dashboard from "./components/conditional-rendering/Dashboard";
import Greeting from "./components/conditional-rendering/Greeting";
import HookFormWithMUI from "./components/form/HookFormWithMUI";
import SaleForm from "./components/form/SaleForm";
import SimpleForm from "./components/form/SimpleForm";
import SimpleHookForm from "./components/form/SimpleHookForm";
import SimpleValidation from "./components/form/SimpleValidation";
import YupExample from "./components/form/YupExample";
import Item from "./components/list/Item";
// import TodoList from "./components/list/TodoList";
import TodoList from "./components/TodoList";
import CustomTab from "./components/tab/CustomTab";
import CounterConditional from "./components/counter/CounterConditional";
import CounterFancy from "./components/counter/CounterFancy";
import DifferentPosition from "./components/counter/DifferentPosition";
import IndexKeyProblem from "./components/IndexKeyProblem";
import KeyWithIndexProblem from "./components/KeyWithIndexProblem";
import SearchableProductTable from "./components/SearchableProductTable";
import TaskList from "./components/task-list/TaskList";
import ReducerCounter from "./components/reducer/ReducerCounter";
import TaskListWithReducer from "./components/reducer/task-list/TaskListWithReducer";
import WithoutContext from "./components/context/WithoutContext";
import WithContext from "./components/context/WithContext";
import TaskListWithContextReducer from "./components/context/task-list/TaskListWithContextReducer";
import WhyRef from "./components/ref/WhyRef";
import FocusDemo from "./components/ref/FocusDemo";
import CounterWithEffect from "./components/effect/CounterWithEffect";
import VideoPlayer from "./components/effect/VideoPlayer";
import EffectOnlyOnce from "./components/effect/EffectOnlyOnce";
import TimerWithCleanUp from "./components/effect/TimerWithCleanUp";
import TodoListWithFetch from "./components/effect/TodoListWithFetch";
import FetchUser from "./components/hook/FetchUser";
import FetchDemo from "./components/hook/FetchDemo";
import withLogger from "./components/pattern/hoc/withLogger";
import AuthDemo from "./components/pattern/hoc/AuthDemo";
import ComposeDemo from "./components/pattern/hoc/ComposeDemo";
import RenderPropertyDemo from "./components/pattern/render-property/RenderPropertyDemo";

const CounterWithLogger = withLogger(Counter);

export default function Home() {
  let profile1 = {
    name: "User 1",
    imgUrl: "https://i.imgur.com/MK3eW3Am.jpg"
  };
  let profile2 = {
    name: "User 2",
    imgUrl: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/53/533b4dd6fb51a925e2e79625b9fa22fa6a1730be_full.jpg"
  }

  let items = ['apple', 'orange', 'banna'];

  let todos = [
    {
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    },
    {
      "userId": 1,
      "id": 2,
      "title": "quis ut nam facilis et officia qui",
      "completed": false
    },
    {
      "userId": 1,
      "id": 3,
      "title": "fugiat veniam minus",
      "completed": false
    }
  ];

  let tabs = ["Tab1", "Tab2", "Tab3"];

  return (
    <div>
      {/* 
        <HelloWorld />
        <HelloWorld />
        <HelloWorld />

      <Profile />
      <Profile />

      <HelloWorld />

      <Child />
      <Parent />
      */}

      {/* <Profile */}
      {/*   profile={{ */}
      {/*     name: "User 1", */}
      {/*     imgUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.explicit.bing.net%2Fth%3Fid%3DOIP.HkLVxrli31tbrO0k9ez15AHaHa%26r%3D0%26pid%3DApi&f=1&ipt=0071db881135a2ecd8118f0a02dedac7d8b842514aa633a6395f2014871bfa98&ipo=images", */}
      {/*   }} */}
      {/* /> */}
      {/**/}
      {/* <Profile */}
      {/*   profile={{ */}
      {/*     name: "User 1", */}
      {/*     imgUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.HqJFm43jtE2p278x7CFiYwHaHa%26r%3D0%26pid%3DApi&f=1&ipt=4820561717c51a5032f378403bdf475df2155e295aeec945e4e659334abdaf5b&ipo=images", */}
      {/*   }} */}
      {/* /> */}

      {/* < Card profile={profile2} /> */}

      {/* <PropForward style={{ */}
      {/*   backgroundColor: "red", */}
      {/* }} */}
      {/*   message="success" */}
      {/* /> */}
      {/* <Card header={ */}
      {/*   <h4>This is h4 header</h4> */}
      {/* }> */}
      {/*   <Profile profile={profile1} /> */}
      {/* </Card> */}
      {/**/}
      {/* <Card header={ */}
      {/*   <span>This is span header</span> */}
      {/* }> */}
      {/*   <h4 style={{ */}
      {/*     padding: "10px", */}
      {/*     color: "#ebdbb2", */}
      {/*   }}> */}
      {/*     Another Usage */}
      {/*   </h4> */}
      {/* </Card> */}

      {/* <Dashboard admin={true} /> */}
      {/* <Dashboard /> */}
      {/* <Greeting show={true} /> */}

      {/* <AdminDashboard page={"etting"} /> */}

      {/* <Item items={items} /> */}
      {/* <TodoList todos={todos} /> */}

      {/* <UITree /> */}

      {/* <CounterWithoutState /> */}

      {/* <Counter /> */}
      {/* <Counter /> */}

      {/* <CounterBatchUpdate /> */}

      {/* <StateArray /> */}

      {/* <StateObject /> */}

      {/* <PassFunction /> */}
      {/* <EventPropagation /> */}

      {/* <Timer /> */}

      {/* <SimpleForm /> */}

      {/* <SimpleHookForm /> */}
      {/* <HookFormWithMUI /> */}
      {/* <SaleForm /> */}

      {/* <SimpleValidation /> */}

      {/* <YupExample /> */}

      {/* <TodoList /> */}

      {/* <CustomTab headers={tabs}> */}
      {/*   <div> */}
      {/*     <h1>Tab 1</h1> */}
      {/*   </div> */}
      {/**/}
      {/*   <div> */}
      {/*     <h1>Tab 2</h1> */}
      {/*   </div> */}
      {/**/}
      {/*   <div> */}
      {/*     <h1>Tab 3</h1> */}
      {/*   </div> */}
      {/* </CustomTab> */}

      {/* <CounterConditional /> */}

      {/* <CounterFancy /> */}

      {/* <DifferentPosition /> */}

      {/* <IndexKeyProblem /> */}

      {/* <KeyWithIndexProblem /> */}

      {/* <SearchableProductTable /> */}

      {/* <TaskList /> */}

      {/* <ReducerCounter /> */}

      {/* <TaskListWithReducer /> */}

      {/* <WithoutContext /> */}

      {/* <WithContext /> */}

      {/* <TaskListWithContextReducer /> */}

      {/* <WhyRef /> */}

      {/* <FocusDemo /> */}

      {/* <CounterWithEffect /> */}

      {/* <VideoPlayer /> */}

      {/* <EffectOnlyOnce /> */}

      {/* <TimerWithCleanUp /> */}

      {/* <TodoListWithFetch /> */}

      {/* <FetchDemo /> */}

      {/* <FetchUser /> */}

      {/* <ReducerCounter /> */}

      {/* <TaskListWithReducer /> */}

      {/* <CounterWithLogger /> */}

      {/* <AuthDemo /> */}

      {/* <ComposeDemo /> */}

      <RenderPropertyDemo />
    </div>
  );
}
