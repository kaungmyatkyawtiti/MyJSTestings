function Child(props) {
  return (
    <div {...props}>
      Child component
    </div>
  )
}

export default function PropForward(props) {
  console.log("props ", props);

  return (
    <div>
      <Child {...props} />
    </div>
  )
}
