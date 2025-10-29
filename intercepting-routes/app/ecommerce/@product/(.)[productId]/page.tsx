import Modal from "@/components/Modal";
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
    return (
      <Modal>
        <div>Product not found</div>
      </Modal>
    );
  }

  return (
    <Modal>
      <ProductCard product={product} />
    </Modal>
  )
}
