function ChildA() {
  console.log("render ChildA");
  return (
    <h3>ChildA</h3>
  )
}

function ChildB() {
  console.log("render ChildB");
  return (
    <>
      <h3>ChildB</h3>
      <GrandChild />
    </>
  )
}

function GrandChild() {
  console.log("render GrandChild");
  return (
    <h5>GrandChild</h5>
  )
}

export default function UITree() {
  return (
    <div>
      UITree
      <ChildA />
      <ChildB />
    </div>
  )
}
