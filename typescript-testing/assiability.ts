type voidFn = () => void;

const f1: voidFn = () => true;
console.log("f1", f1());

const f2: voidFn = () => false;

const f3: voidFn = function () {
  return true;
}
// console.log(!f3());
