function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function mutiply(a: number, b: number): number {
  return a * b;
}

type Fun = (a: number, b: number) => number;
let fun: Fun = add;

function hello(): void {
  console.log("hello");
}
// fun = hello;
