function ListItem({ items, render }) {
  return (
    <div>
      {
        items.map((item, index) =>
          <div key={index}>
            {
              render(item)
            }
          </div>
        )
      }
    </div>
  )
}

function RenderWithDiv(item) {
  return (
    <div>
      {item}
    </div>
  )
}

function RenderWithList(item) {
  return (
    <ul>
      <li>
        {item}
      </li>
    </ul>
  )
}

export default function RenderPropertyDemo() {
  let items = ["Apple", "Orange", "Banana"];

  return (
    <div style={{ maxWidth: 800, margin: "20px auto" }}>
      <h3>Demo</h3>

      <ListItem
        items={items}
        render={RenderWithList} />

      <ListItem
        items={items}
        render={RenderWithDiv} />
    </div>
  )
}
