import ThemeContext from "./ThemeContext";
import { useContext, useState } from "react"

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
  const { color } = useContext(ThemeContext);

  return (
    <div style={{ color: color }}>
      GrandChild with Context
    </div>
  )
}

export default function WithContext() {
  const [color, setColor] = useState("blue");

  const handleChangeGreen = () => {
    setColor("green");
  }

  const handleChangeRed = () => {
    setColor("red");
  }

  return (
    <ThemeContext.Provider value={{ color }}>
      <>
        <button
          type='button'
          onClick={handleChangeGreen}
        >
          Green
        </button>
        <button
          type='button'
          onClick={handleChangeRed}
        >
          Red
        </button>
        <Parent />
      </>
    </ThemeContext.Provider>
  )
}
