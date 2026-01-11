export interface Product {
  name: string;
  description: string;
  price: string;
  stock: string;
  category: string;
  image: string;
  status: "active" | "draft";
}
