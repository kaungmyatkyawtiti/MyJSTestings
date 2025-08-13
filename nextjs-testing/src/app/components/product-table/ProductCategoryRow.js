function ProductItem({ item }) {
  return (
    <div>
      <span
        style={{
          color: item.stocked ? "red" : "black",
        }}
      >
        {item.name}
      </span>
      <span >{item.price}</span>
    </div>
  )
}

export default function ProductCategoryRow({ items }) {
  return (
    <div>
      <h3>
        {
          items[0] && items[0].category
        }
      </h3>
      {
        items.map((item, index) => < ProductItem key={index} item={item} />
        )
      }
      <br />

    </div>
  )
}


