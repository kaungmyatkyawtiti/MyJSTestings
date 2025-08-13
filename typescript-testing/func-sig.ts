type CallbackFn = () => void;
function doLater(callback: CallbackFn) {
  setTimeout(callback, 3000);
}

function hello() {
  console.log("Hello");
}

doLater(hello);

type AddFn = (a: number, b: number) => number;
const add: AddFn = (a, b) => a + b;

console.log(add(4, 7));
// doLater(add(1, 4));
