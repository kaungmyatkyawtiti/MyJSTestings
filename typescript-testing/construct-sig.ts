class Human {
  name: string;
  constructor(name: string) {
    console.log("Human constructor");
    this.name = name;
  }
}

class Teacher extends Human {
  constructor(name: string) {
    super(name);
    console.log("Teacher constructor");
  }
}

class Doctor extends Human {
  constructor(name: string) {
    super(name);
    console.log("Doctor constructor");
  }
  indroduce() {
    console.log(`hi, I'm ${this.name}`);
  }
}

// type SomeConstructor<T> = {
//   new(str: string): T;
// }
//
// function fn<T>(ctor: SomeConstructor<T>): T {
//   return new ctor("hello");
// }

type SomeConstructor<T extends Human> = {
  new(str: string): T;
};

function fn<T extends Human>(ctor: SomeConstructor<T>): T {
  return new ctor("hello");
}

fn(Human);
fn(Teacher);
const doctor = fn(Doctor);
doctor.indroduce();
