function hello() {
  console.log("hello");
}
hello.description = "hello func";

type FunWithDesc = {
  description: string,
  (): void,
}
let fn: FunWithDesc = hello;
fn();
