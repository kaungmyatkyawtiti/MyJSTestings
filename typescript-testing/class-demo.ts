class Human {
  constructor(private name: string, private age: number) {
    console.log("constructor is running");
  }

  display() {
    console.log(`${this.name} is ${this.age}`);
  }
}

let h = new Human("kmk", 22);
h.display();
