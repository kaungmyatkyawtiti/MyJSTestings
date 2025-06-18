"use client";
//import Image from "next/image";
//import styles from "./page.module.css";

import Card from "./components/Card";
import Counter from "./components/Counter";
import CounterBatchUpdate from "./components/CounterBatchUpdate";
import CounterWithoutState from "./components/CounterWithoutState";
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
import SimpleForm from "./components/form/SimpleForm";
import SimpleHookForm from "./components/form/SimpleHookForm";
import Item from "./components/list/Item";
import TodoList from "./components/list/TodoList";

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
      <HookFormWithMUI />
    </div>
  );
}
