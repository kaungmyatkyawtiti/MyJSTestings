function fail(msg) {
    throw new Error(msg);
}
var data = fail("hello");
console.log(data);
