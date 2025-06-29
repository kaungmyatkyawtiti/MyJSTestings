type Box = {
  data: number,
}

let b1: Box = {
  data: 1,
}

// let stringBox: Box = {
//   data: "hi",
// }
//
type BoxAny = {
  data: any,
}

let b2: BoxAny = {
  data: "hello",
}
console.log("b2", b2.data * 2);
