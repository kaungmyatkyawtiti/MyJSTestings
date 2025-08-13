function hello() {
    console.log("hello");
}
hello.description = "hello func";
var fn = hello;
fn();
console.log(fn.description);
