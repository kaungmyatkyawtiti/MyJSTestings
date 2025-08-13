type DescFn = {
  desc: string;
  (someArg: number): boolean;
};

function doSomething(fn: DescFn) {
  console.log(fn.desc + " and someArg > 3 is returned " + fn(6));
}

function myFunc(someArg: number) {
  return someArg > 3;
}

myFunc.desc = "my description";

doSomething(myFunc);
