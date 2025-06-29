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
}

type SomeConstructor = {
  new(str: string): Human
}

function fn(cntor: SomeConstructor) {
  return new cntor("hello");
}

fn(Human);
fn(Teacher);
fn(Doctor);
