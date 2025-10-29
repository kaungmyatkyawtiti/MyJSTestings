import Link from "next/link";
import Image from "next/image";
import { Product } from "@/db/dummy";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({
  product
}: ProductCardProps) {
  return (
    <div>
      <Image
        src={product.image}
        alt={product.name}
        width={160}
        height={160}
        className="object-cover h-auto w-auto"
        loading="eager"
        priority
      />
      <h2>{product.name}</h2>
      <p>{product.price}</p>
    </div >
  )
}

