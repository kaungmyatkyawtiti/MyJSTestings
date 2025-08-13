function doSomething(fn) {
    console.log(fn.desc + " and someArg > 3 is returned " + fn(6));
}
function myFunc(someArg) {
    return someArg > 3;
}
myFunc.desc = "my description";
doSomething(myFunc);
