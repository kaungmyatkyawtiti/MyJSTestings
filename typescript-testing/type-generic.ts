type Box<T> = {
  data: T,
}

let b1: Box<number> = {
  data: 5,
}
console.log("b1 ", b1.data * 2);

let b2: Box<string> = {
  data: "hello",
}
console.log("b2 data toUpperCase", b2.data.toUpperCase());
