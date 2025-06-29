let fun: Function = (a: number, b: number) => a + b;
console.log("fun", fun(2, 4));

fun = (msg: string) => msg;
console.log("fun", fun("hello function"));
