interface Box<T> {
  data: T
}

let numBox: Box<number> = {
  data: 200
}
console.log("numBox data toFixed", numBox.data.toFixed(2));

let stringBox: Box<string> = {
  data: "hello",
}
console.log("stringBox data toUpperCase", stringBox.data.toUpperCase());
