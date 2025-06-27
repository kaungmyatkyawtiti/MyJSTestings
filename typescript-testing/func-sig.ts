function doLater(callback: () => void) {
  setTimeout(callback, 3000);
}

function hello() {
  console.log("Hello");
}

function add(a: number, b: number): number {
  return a + b;
}

doLater(hello);
// doLater(add(1, 4));
