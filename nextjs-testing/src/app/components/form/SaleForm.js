import { useForm } from "react-hook-form";

export default function SaleForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const formValues = watch();
  console.log("form values ", formValues);

  const onSubmitHandler = (data) => console.log(data);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <div>
          <label>Price</label>
          <input
            type="text"
            {...register("price")}
          />
        </div>

        <div>
          <label>Qty</label>
          <input
            type="text"
            {...register("qty")}
          />
        </div>
        <div>
          Total: {formValues.price * formValues.qty}
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}
