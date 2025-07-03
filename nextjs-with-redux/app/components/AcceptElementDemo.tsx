import React from "react";

interface AcceptProps {
  header: React.JSX.Element,
  children: React.ReactElement
}

function Accept({ header, children }: AcceptProps) {
  return (
    <div>
      {header}
      Childern are down below
      {children}
    </div>
  )
}

function AcceptElementDemo() {
  return (
    <div>
      <Accept header={<h2>This is input from parent</h2>}>
        <ul>
          <li>Apple</li>
          <li>Orange</li>
          <li>Banana</li>
        </ul>
      </Accept>
    </div>
  )
}

export default AcceptElementDemo;
