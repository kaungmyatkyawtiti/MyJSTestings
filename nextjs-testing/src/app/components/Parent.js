export function Child() {
  console.log("Child");
  return (
    <div>
      <h3>Child</h3>
    </div>
  )
}

export default function Parent() {
  console.log("Parent");
  return (
    <div>
      <h2>Parent</h2>

      <Child />
    </div>
  )
}
