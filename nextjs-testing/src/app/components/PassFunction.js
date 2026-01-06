import { useState } from "react";

function ChildButton({ onCallback }) {
  return (
    <div>
      <button
        type="button"
        onClick={onCallback}>
        Inc
      </button>
    </div>
  )
}

export default function PassFunction() {
  let [count, setCount] = useState(0);

  const handleCallBack = () => {
    console.log("callback from parent");
    setCount(++count);
  }

  return (
    <div>
      Parent Counter: {count}
      <ChildButton onCallback={handleCallBack} />
    </div>
  )
}

// Parent component
// import { useState } from "react";
// import Child from "./Child";
//
// export function Parent() {
//   const [message, setMessage] = useState("");
//
//   // Callback function passed to child
//   const handleMessage = (childData) => {
//     setMessage(childData);
//   };
//
//   return (
//     <div>
//       <h1>Message from child: {message}</h1>
//       <Child sendMessage={handleMessage} />
//     </div>
//   );
// }
//
// // Child component
// function Child({ sendMessage }) {
//   const sendDataToParent = () => {
//     sendMessage("Hello from child!");
//   };
//
//   return (
//     <button onClick={sendDataToParent}>Send Message</button>
//   );
// }
//
// export default Child;
