import { Box } from "@mui/material";
import { useApp } from "../ThemedApp";
import Form from "../components/Form.jsx";
import Item from "../components/Item";
import { useState } from "react";

export default function Home() {
  const { showForm, setGlobalMsg } = useApp();

  const [data, setData] = useState([
    { id: 3, content: "Yay, interesting.", name: "Chris" },
    { id: 2, content: "React is fun.", name: "Bob" },
    { id: 1, content: "Hello, World!", name: "Alice" },
  ]);

  const remove = id => {
    setData(data.filter(item => item.id !== id));
    setGlobalMsg("An item is removed!");
  }

  const add = (content, name) => {
    const id = data[data.length - 1].id + 1;
    setData([{ id, content, name }, ...data]);
    setGlobalMsg("An item is added!");
  }

  return (
    <Box>
      {showForm && <Form add={add} />}

      {
        data.map(item => (
          <Item key={item.id} item={item} remove={remove} />
        ))
      }
    </Box>
  )
}
