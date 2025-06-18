import { useState } from "react"

export default function SimpleForm() {
  let [price, setPrice] = useState('');
  let [quantity, setQuantity] = useState('');

  const priceOnChangeHandler = (e) => {
    setPrice(e.target.value);
  }

  const quantityOnChangeHandler = (e) => {
    setQuantity(e.target.value);
  }

  return (
    <div>
      Simple Form
      <form>
        <div>
          <label>Price&nbsp;</label>
          <input
            type="text"
            value={price}
            onChange={priceOnChangeHandler}
          />
        </div>

        <div>
          <label>Quantity&nbsp;</label>
          <input
            type="text"
            value={quantity}
            onChange={quantityOnChangeHandler}
          />
        </div>

        <div>
          <label>Total</label>
          Total: {price * quantity}
        </div>
      </form>
    </div>
  )
}
