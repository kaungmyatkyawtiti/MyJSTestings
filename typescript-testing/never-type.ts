function fail(msg: string): never {
  throw new Error(msg);
}

let data = fail("hello");
console.log(data);
