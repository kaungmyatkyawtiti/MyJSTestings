import { useState } from "react";

let list = ["apple", "orange", "banana"];

export default function IndexKeyProblem() {
  const [items, setItems] = useState(list);

  const updateHandler = item => {
    const newItems = items.map(it => it === item ? it + " updated" : it);
    setItems(newItems);
  }

  const sortHandler = () => {
    items.sort();
    setItems([...items]);
  }

  const deleteHandler = (item) => {
    const newItems = items.filter(it => it !== item);
    setItems(newItems);
  }

  return (
    <div>
      List
      <div>
        <button
          type="button"
          onClick={sortHandler}
        >
          Sort
        </button>
      </div>
      {
        items.map((item, index) =>
          <div key={index}>
            <span>{item}&nbsp;</span>
            {/* update button ####### */}
            <button
              type="button"
              onClick={() => updateHandler(item)}
            >
              Update
            </button>
            {/* delete button ######## */}
            <button
              type="button"
              onClick={() => deleteHandler(item)}
            >
              Delete
            </button>
          </div>
        )
      }
    </div>
  )
}
