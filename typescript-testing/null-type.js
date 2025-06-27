function doSomething(msg) {
    if (msg === null) {
        console.log("msg is null");
    }
    else {
        console.log("msg toUpperCase", msg === null || msg === void 0 ? void 0 : msg.toUpperCase());
    }
}
doSomething(null);
doSomething("kaung myat kyaw");
function livedangerously(x) {
    console.log(x.toFixed());
}
livedangerously(19);
livedangerously(null);
