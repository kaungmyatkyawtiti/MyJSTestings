export interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "MacBook Pro",
    price: "$1000",
    image: "/macbook.jpg"
  },
  {
    id: 2,
    name: "Redmi",
    price: "$1000",
    image: "/macbook.jpg"
  },
  {
    id: 3,
    name: "Acer",
    price: "$1000",
    image: "/macbook.jpg"
  },
  {
    id: 4,
    name: "Asus",
    price: "$1000",
    image: "/macbook.jpg"
  }
] 
