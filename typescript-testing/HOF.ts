let add = (x: number) => (y: number) => x + y;

type CurriedFn = (x: number) => (y: number) => number;

const fn: CurriedFn = add;
console.log("curriedAdd ", fn(2)(3));
