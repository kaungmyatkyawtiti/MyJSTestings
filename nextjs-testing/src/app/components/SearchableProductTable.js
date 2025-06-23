import classNames from "classnames";
import { useState } from "react"

let data = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
  { category: "Another", price: "$1", stocked: true, name: "Another" }
]

function ProductCategoryRow({ items }) {
  return (
    <div>
      <h3>{items[0] && items[0].category}</h3>

      {
        items.map((item, index) => {
          const itemClass = classNames({
            "stocked": item.stocked
          });

          return (
            <div key={`${item.name}-${index}`}>
              <span className={itemClass}>
                {item.name}&nbsp;
              </span>
              <span>{item.price}</span>
            </div>
          )
        })
      }
      <br />

    </div>
  )
}

function getDistinctCategory(items) {
  const categories = items.map(item => item.category);
  const set = new Set(categories);
  return [...set];
}

export default function SearchableProductTable() {
  const [items, setItems] = useState(data);
  const [searchText, setSearchText] = useState("");
  const [inStock, setInStock] = useState(false);

  // let filteredItems = items.filter(item => item.name.includes(searchText));
  // if (inStock) {
  //   filteredItems = filteredItems.filter(item => item.stocked);
  // }

  const filteredItems = items.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchText.toLowerCase());
    const matchesStock = !inStock || item.stocked;
    return matchesSearch && matchesStock;
  });

  // const fruits = filteredItems.filter(item => item.category == "Fruits");
  //
  // const vegetables = filteredItems.filter(item => item.category == "Vegetables");

  const categories = getDistinctCategory(items);

  const searchOnChangeHandler = (e) => {
    setSearchText(e.target.value);
  }

  const inStockOnChangeHandler = (e) => {
    // console.log(e);
    setInStock(e.target.checked);

  }
  return (
    <div>
      <h2>Product Table</h2>

      <form>
        <div>
          <input
            type="text"
            value={searchText}
            onChange={searchOnChangeHandler} />
        </div>

        <div>
          <label>
            <input
              type="checkbox"
              value={inStock}
              onChange={inStockOnChangeHandler} />
            Only show product is instocked
          </label>
        </div>
      </form>
      <br />

      {/* <br /> */}
      {/* <ProductCategoryRow items={fruits} /> */}
      {/**/}
      {/* <br /> */}
      {/* <ProductCategoryRow items={vegetables} /> */}

      {
        categories.map((cat, index) =>
          <ProductCategoryRow
            key={`${cat} - ${index}`}
            items={filteredItems.filter(item => item.category == cat)} />
        )
      }
    </div>
  )
}
