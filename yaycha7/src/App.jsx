import { useState } from "react";

import { Box, Container } from "@mui/material";

import Header from "./components/Header.jsx";
import Form from "./components/Form.jsx";
import Item from "./components/Item.jsx";

import { useApp } from "./ThemedApp.jsx";

export default function App() {
  const { showForm, setGlobalMsg } = useApp();

  const [data, setData] = useState([
    { id: 1, content: "Hello, World!", name: "Alice" },
    { id: 2, content: "React is fun", name: "Alice" },
    { id: 3, content: "Yay, interesting.", name: "Alice" },
  ])

  const remove = id => {
    setData(data.filter(item => item.id !== id));
    setGlobalMsg("An item deleted");
  }

  const add = (content, name) => {
    const id = data[data.length - 1].id + 1;
    setData([{ id, content, name }, ...data]);
    setGlobalMsg("An item added");
  }
  return (
    <Box>
      <Header />
      <Container
        maxWidth="sm"
        sx={{ mt: 4 }}>
        {showForm && <Form add={add} />}
        {data.map(item => {
          return (
            <Item
              key={item.id}
              item={item}
              remove={remove}
            />
          )
        })}
      </Container>
    </Box>
  );
}
