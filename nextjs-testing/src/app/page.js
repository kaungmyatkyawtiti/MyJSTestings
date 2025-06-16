//import Image from "next/image";
//import styles from "./page.module.css";

import HelloWorld from "./components/HelloWorld";
import Parent, { Child } from "./components/Parent";
import Profile from "./components/Profile";

export default function Home() {
  //  console.log("HelloWorld ", HelloWorld());
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

      <Profile
        profile={{
          name: "User 1",
          imgUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.explicit.bing.net%2Fth%3Fid%3DOIP.HkLVxrli31tbrO0k9ez15AHaHa%26r%3D0%26pid%3DApi&f=1&ipt=0071db881135a2ecd8118f0a02dedac7d8b842514aa633a6395f2014871bfa98&ipo=images",
        }}
      />

      <Profile
        profile={{
          name: "User 1",
          imgUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.HqJFm43jtE2p278x7CFiYwHaHa%26r%3D0%26pid%3DApi&f=1&ipt=4820561717c51a5032f378403bdf475df2155e295aeec945e4e659334abdaf5b&ipo=images",
        }}
      />

    </div>
  );
}
