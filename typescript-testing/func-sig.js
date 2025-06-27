function doLater(callback) {
    setTimeout(callback, 3000);
}
function hello() {
    console.log("Hello");
}
doLater(hello);
