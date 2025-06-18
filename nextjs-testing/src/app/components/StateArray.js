import { useState } from "react"

export default function StateArray() {
  let [items, setItems] = useState(['Apple', "Orange", "Banana"]);

  const addItemHandler = () => {
    // items.push("Another");
    setItems([...items, "Another"]);
  }

  console.log("render");
  return (
    <div>
      <ul>
        {
          items.map((item, index) =>
            <li key={index}>{item}</li>
          )
        }
      </ul>
      <button className="button" onClick={addItemHandler}>&nbsp;Add&nbsp;</button>
    </div>
  )
}
