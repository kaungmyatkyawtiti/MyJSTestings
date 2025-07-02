var add = function (x) { return function (y) { return x + y; }; };

var fn = add;

console.log("curriedAdd ", fn(2)(3));
