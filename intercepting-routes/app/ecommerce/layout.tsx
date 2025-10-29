import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  product: ReactNode;
}
export default function ProductsLayout({
  children,
  product,
}: Props) {
  return (
    <>
      {children}
      {product}
    </>
  );
}
