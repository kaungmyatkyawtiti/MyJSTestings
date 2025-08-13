type FunWithDesc = {
  description: string;
  (): void;
}

function hello() {
  console.log("hello");
}
hello.description = "hello func";

const fn: FunWithDesc = hello;

fn();
console.log(fn.description);
