function doLater(callback) {
    setTimeout(callback, 3000);
}
function hello() {
    console.log("Hello");
}
doLater(hello);
var add = function (a, b) { return a + b; };
console.log(add(4, 7));
// doLater(add(1, 4));
