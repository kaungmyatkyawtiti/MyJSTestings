export default function List({ children }) {
  return (
    <ul
      style={{
        listStyle: "none",
        padding: 0,
        maring: 0,
        border: "1px solid #ddd",
        borderRadius: 8,
        overflow: "hidden",
      }}>
      {children}
    </ul>
  )
}
