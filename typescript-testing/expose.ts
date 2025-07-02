class Base {
  protected m = 15;
}

class Derived extends Base {
  m = 20;
}
const d = new Derived();
console.log(d.m);
