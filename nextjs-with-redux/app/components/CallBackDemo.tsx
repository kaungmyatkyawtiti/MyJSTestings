'use client';

interface ChildProps {
  handler: () => void;
}

function Child({ handler }: ChildProps) {
  return (
    <div>
      <h2>Child</h2>
      <button
        type="button"
        onClick={handler}>
        Click me
      </button>
    </div>
  )
}

function CallBackDemo() {
  const handler = () => {
    console.log("Parent Handler");
  }

  return (
    <div>
      Parent
      <Child handler={handler} />
    </div>
  )
}

export default CallBackDemo;
