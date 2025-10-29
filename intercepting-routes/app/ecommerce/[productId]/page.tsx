import ProductCard from "@/components/ProductCard";
import { products } from "@/db/dummy"

export default async function DetailPage({
  params,
}: {
  params: Promise<{ productId: string }>
}) {
  const { productId } = await params

  const product = products.find(item => item.id === +productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="p-5">
      <ProductCard product={product} />
    </div>
  )
}

