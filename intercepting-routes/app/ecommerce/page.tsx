import { products } from "@/db/dummy";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";

export default function ProductPage() {
  return (
    <div>
      <section className="m-6">
        <div>
          <h2 className="text-2xl font-semibold">
            Menu
          </h2>
        </div>
        <ul className="flex gap-4">
          {
            products.map(product =>
              <div
                key={product.id}
                className="border"
              >
                <ProductCard
                  product={product}
                />
                <Link
                  href={`/ecommerce/${product.id}`}
                >
                  <button
                    className="p-1 bg-gray-500 mt-2 rounded-md hover:bg-gray-600 text-gray-100"
                  >
                    detail
                  </button>
                </Link>
              </div>
            )
          }
        </ul>
      </section>
    </div >
  )
}

