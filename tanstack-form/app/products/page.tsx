'use client';

import { Button } from "@/components/ui/button";
import { Product } from "@/types";
import { useForm } from "@tanstack/react-form";
import { z } from "zod";

const numberString = (field: string) => z
  .string()
  .regex(/^\d+$/, `${field} is not valid value`)
  .refine((v) => Number(v) >= 0, {
    message: `${field} cannot be negative value`,
  });

const productSchema = z.object({
  name: z
    .string()
    .min(1, "Product name is required")
    .max(100, "Product name is too long"),

  description: z
    .string()
    .min(10, "Description must be at least 10 characters")
    .max(1000, "Description is too long"),

  price: numberString("Price"),

  stock: numberString("Stock"),

  category: z
    .string()
    .min(1, "Category is required"),

  image: z
    .string()
    .min(1, "Image is required"),

  status: z.enum(["active", "draft"]),
});

const defaultValues: Product = {
  name: "",
  description: "",
  price: "",
  stock: "",
  category: "",
  image: "",
  status: "draft"
}

export default function ProductForm() {
  const form = useForm({
    defaultValues,
    validators: {
      onSubmit: productSchema,
    },
    onSubmit: async ({ value }) => {
      console.log(value)
    },
  })

  return (
    <div className="my-10 w-full sm:max-w-xl mx-auto px-5">
      <form
        className="space-y-7"
        id="product-form"
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit();
        }}
      >
        {/* Product Name */}
        <form.Field
          name="name"
          children={(field) => {
            console.log(field.state.meta.errors)
            const isInvalid =
              field.state.meta.isTouched && !field.state.meta.isValid

            const errMsgs = field.state.meta.errors
              ?.map(e => e?.message)
              .filter(Boolean) as string[]

            return (
              <div className="space-y-1">
                <label
                  htmlFor={field.name}
                  className="form-label"
                >
                  Name
                </label>
                <input
                  type="text"
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  placeholder="MacBook Pro M3"
                  className="form-input"
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  aria-invalid={isInvalid}
                />
                {
                  isInvalid && <ErrorField errors={errMsgs} />
                }
              </div>
            )
          }}
        />
        {/* Description */}
        <form.Field
          name="description"
          children={(field) => {
            const isInvalid =
              field.state.meta.isTouched && !field.state.meta.isValid

            const errMsgs = field.state.meta.errors
              ?.map(e => e?.message)
              .filter(Boolean) as string[]

            return (
              <div className="space-y-1">
                <label
                  htmlFor={field.name}
                  className="form-label"
                >
                  Description
                </label>
                <textarea
                  rows={4}
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  placeholder="Short product description..."
                  className="form-input"
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
                {
                  isInvalid && <ErrorField errors={errMsgs} />
                }
              </div>
            )
          }}
        />
        {/* Price & Stock */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <form.Field
            name="price"
            children={(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid

              const errMsgs = field.state.meta.errors
                ?.map(e => e?.message)
                .filter(Boolean) as string[]

              return (
                <div className="space-y-1">
                  <label
                    htmlFor={field.name}
                    className="form-label"
                  >
                    Price ($)
                  </label>
                  <input
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    placeholder="1999.00"
                    className="form-input"
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                  {
                    isInvalid && <ErrorField errors={errMsgs} />
                  }
                </div>
              )
            }}
          />
          <form.Field
            name="stock"
            children={(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid

              const errMsgs = field.state.meta.errors
                ?.map(e => e?.message)
                .filter(Boolean) as string[]

              return (
                <div className="space-y-1">
                  <label
                    htmlFor={field.name}
                    className="form-label"
                  >
                    Stock
                  </label>
                  <input
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    placeholder="12"
                    className="form-input"
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                  {
                    isInvalid && <ErrorField errors={errMsgs} />
                  }
                </div>
              )
            }}
          />
        </div>
        {/* Category */}
        <form.Field
          name="category"
          children={(field) => {
            const isInvalid =
              field.state.meta.isTouched && !field.state.meta.isValid

            const errMsgs = field.state.meta.errors
              ?.map(e => e?.message)
              .filter(Boolean) as string[]

            return (
              <div className="space-y-1">
                <label
                  htmlFor={field.name}
                  className="form-label"
                >
                  Category
                </label>
                <select
                  id={field.name}
                  className="input-select"
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={e => field.handleChange(e.target.value)}
                >
                  <option value="">--Choose Category--</option>
                  <option value="electronics">Electronics</option>
                  <option value="accessories">Accessories</option>
                  <option value="software">Software</option>
                </select>
                {
                  isInvalid && <ErrorField errors={errMsgs} />
                }
              </div>
            )
          }}
        />
        {/* Image */}
        <form.Field
          name="image"
          children={(field) => {
            const isInvalid =
              field.state.meta.isTouched && !field.state.meta.isValid

            const errMsgs = field.state.meta.errors
              ?.map(e => e?.message)
              .filter(Boolean) as string[]

            return (
              <div className="space-y-1">
                <label className="form-label">
                  Product image
                </label>
                <input
                  type="file"
                  className="input-file"
                  id={field.name}
                  name={field.name}
                  onBlur={field.handleBlur}
                  onChange={e => {
                    console.log("file", e.target.files)
                    const file = e.target.files?.[0]
                    field.handleChange(file ? file.name : "")
                  }}
                />
                {
                  isInvalid && <ErrorField errors={errMsgs} />
                }
              </div>
            )
          }}
        />

        {/* Status */}
        <form.Field
          name="status"
          children={(field) => {
            const isInvalid =
              field.state.meta.isTouched && !field.state.meta.isValid

            const errMsgs = field.state.meta.errors
              ?.map(e => e?.message)
              .filter(Boolean) as string[]

            return (
              <fieldset className="space-y-2">
                <legend className="form-label">
                  Status
                </legend>

                <div className="flex items-center gap-4">
                  <label className="flex items-center gap-2 text-sm">
                    <input
                      type="radio"
                      name={field.name}
                      value="active"
                      checked={field.state.value === "active"}
                      onChange={() => field.handleChange("active")}
                      onBlur={field.handleBlur}
                    />
                    Active
                  </label>

                  <label className="flex items-center gap-2 text-sm">
                    <input
                      type="radio"
                      name={field.name}
                      value="draft"
                      checked={field.state.value === "draft"}
                      onChange={() => field.handleChange("draft")}
                      onBlur={field.handleBlur}
                    />
                    Draft
                  </label>
                </div>

                {isInvalid && <ErrorField errors={errMsgs} />}
              </fieldset>
            )
          }}
        />
        {/* Actions */}
        <div className="flex justify-end gap-3 pt-4">
          <Button
            variant="outline"
            type="button"
            onClick={() => form.reset()}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            className="bg-indigo-500 hover:bg-indigo-600 text-white"
            form="product-form"
          >
            Save
          </Button>
        </div>
      </form>
    </div>
  );
}

export function ErrorField({ errors }: { errors: string[] }) {
  return (
    <ul role="alert" className="mt-1 space-y-0.5 pl-4 text-sm text-red-500">
      {errors.map((msg, ind) => (
        <li
          key={ind}
          className="list-disc"
        >
          {msg}
        </li>
      ))}
    </ul>
  )
}
