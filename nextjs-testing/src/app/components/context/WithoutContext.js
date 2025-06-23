function Parent({ message }) {
  return (
    <div>
      Parent
      <Child message={message} />
    </div>
  )
}

function Child({ message }) {
  return (
    <div>
      Child
      <GrandChild message={message} />
    </div>
  )
}

function GrandChild({ message }) {
  return (
    <div>
      GrandChild {message}
    </div>
  )
}

export default function WithoutContext() {
  return (
    <div>
      <Parent message={"hello"} />
    </div>
  )
}
