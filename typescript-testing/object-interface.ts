interface Person {
  name: string;
  age: number;
}

function greet(obj: Person) {
  console.log("Hello " + obj.name);
}

greet({
  name: "kmk",
  age: 22,
});

