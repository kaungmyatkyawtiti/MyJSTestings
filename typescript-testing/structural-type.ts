type Human = {
  name: string;
  age: number;
}

type Another = {
  name: string;
  age: number;
  description: string;
}

let h: Human = {
  name: "kmk",
  age: 22,
}

let a: Another = {
  name: "something",
  age: 19,
  description: "hi",
}

// a = h;
// console.log("a", a);
h = a;
console.log("h", h);
