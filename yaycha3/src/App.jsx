import { useState } from "react";

import Header from "./components/Header";
import Form from "./components/Form.jsx";
import Item from "./components/Item";

import { useApp } from "./ThemedApp.jsx";
import { Box, Container } from "@mui/material";

export default function App() {
  const { showForm, setGlobalMsg } = useApp();

  const [data, setData] = useState([
    { id: 1, content: "Hello World", name: "Alice" },
    { id: 2, content: "Bye See Ya", name: "Bob" },
    { id: 3, content: "Hi React", name: "Eric" },
  ])

  const remove = (id) => {
    setData(data.filter(item => item.id !== id));
    setGlobalMsg("An item deleted");
  }

  const add = (content, name) => {
    const id = data[data.length - 1].id + 1;
    setData([...data, { id, content, name }]);
    setGlobalMsg("An item added");
  }

  return (
    <Box>
      <Header />

      <Container
        maxWidth="sm"
        sx={{ mt: 4 }}>
        {showForm && <Form add={add} />}

        {data.map(item => (
          <Item
            key={item.id}
            item={item}
            remove={remove} />
        ))}
      </Container>
    </Box>
  )
}
