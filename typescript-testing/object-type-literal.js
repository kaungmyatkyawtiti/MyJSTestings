function greet(person) {
    console.log("person", person.name.toUpperCase(), person.address);
}
greet({
    name: "someone",
    age: 21,
    address: "somewhere",
});
