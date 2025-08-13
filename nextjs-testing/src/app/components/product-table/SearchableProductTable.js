import { useState } from "react"
import ProductCategoryRow from './ProductCategoryRow';
import { useRef } from 'react';

let data = [
  { category: "Fruits", price: "$1", stocked: false, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
  { category: "Another", price: "$1", stocked: true, name: "Another" }
]

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

  // const fruits = filteredItems.filter(item => item.category == "Fruits");
  //
  // const vegetables = filteredItems.filter(item => item.category == "Vegetables");

  const categories = getDistinctCategory(items);

  const filteredItems = items.filter(item => {
    const itemName = item.name.toLowerCase();
    const matchesSearch = itemName.includes(searchText.toLowerCase());
    const matchesInstock = !inStock || item.stocked;
    return matchesSearch && matchesInstock;
  });

  const productRef = useRef();

  const handleSearch = (e) => {
    e.preventDefault();
    const product = productRef.current.value;
    console.log(product);
    setSearchText(product);
    e.currentTarget.reset();
    document.activeElement?.blur();
  }

  const handleInStock = (e) => {
    console.log(e.target.checked);
    setInStock(e.target.checked);
    document.activeElement?.blur();
  }

  return (
    <div style={{ maxWidth: 900, margin: "20px auto", padding: 10 }}>
      <h2>Product Table</h2>

      <form onSubmit={handleSearch}>
        <div>
          <input
            type="text"
            placeholder='search product...'
            ref={productRef}
          />
          <button type='submit'>
            Search
          </button>
        </div>
      </form >
      <div>
        <label>
          <input
            type="checkbox"
            value={inStock}
            onChange={handleInStock} />
          Only show product is instocked
        </label>
      </div>

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
