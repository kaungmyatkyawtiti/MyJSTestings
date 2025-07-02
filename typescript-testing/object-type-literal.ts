// type Person = {
//   readonly name: string,
//   age: number,
//   address?: string,
// }

// function greet(person: Person) {
//   // person.name = "updated";
//   console.log("person", person.name, person.address);
// }

// greet({
//   name: "someone",
//   age: 21,
//   address: "somewhere",
// })

type Person = {
  readonly name: string,
  age: number,
  address?: string,
}

function greet(person: Person) {
  // person.name = "updated";
  console.log("person", person.name, person.address);
}

greet({
  name: "someone",
  age: 22,
  address: "somewhere",
})