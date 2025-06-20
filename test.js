function greet(name) {
  console.log("Hello, " + name);
}
// let onClick = greet("Alice");  // THIS CALLS THE FUNCTION IMMEDIATELY!

let onClick = () => greet("Kmk");
onClick();
