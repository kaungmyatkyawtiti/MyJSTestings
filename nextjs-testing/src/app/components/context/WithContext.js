import ThemeContext from "./ThemeContext";
import { useContext } from "react"

function Parent() {
  return (
    <div>
      Parent
      <Child />
    </div>
  )
}

function Child() {
  return (
    <div>
      Child
      <GrandChild />
    </div>
  )
}

function GrandChild() {
  const theme = useContext(ThemeContext);

  return (
    <div style={{ color: theme.color }}>
      GrandChild with Context
    </div>
  )
}

export default function WithContext() {
  return (
    <div>
      <ThemeContext.Provider value={{ color: "blue" }}>
        <Parent />
      </ThemeContext.Provider>
    </div>
  )
}
