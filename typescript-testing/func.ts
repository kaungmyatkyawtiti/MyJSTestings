function hello(): void {
  console.log("hello");
}
hello();

function add(a: number, b: number): number {
  return a + b;
}
console.log(add(1, 4));

const names = ["kmk", "eucalyptus", "mxyzptlk", "titi"];
names.forEach(name => console.log("Name:", name));
