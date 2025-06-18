export default function Item({ items }) {
  return (
    <div>
      <ul>
        {items.map((item, index) =>
          <li key={index}>{item}</li>
        )}
      </ul>
    </div>
  )
}
