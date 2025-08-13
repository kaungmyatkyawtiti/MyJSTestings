import classNames from "classnames";

function ProductItem({ item }) {
  const itemClass = classNames({
    "stocked": item.stocked
  });

  return (
    <div>
      <span className={itemClass}>
        {item.name}&nbsp;
      </span>
      <span>{item.price}</span>
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


