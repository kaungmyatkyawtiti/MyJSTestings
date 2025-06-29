var fun = function (a, b) { return a + b; };
console.log("fun", fun(2, 4));
fun = function (msg) { return msg; };
console.log("fun", fun("hello function"));
