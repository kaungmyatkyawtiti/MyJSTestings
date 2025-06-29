interface Home {
  readonly resident: { name: string, age: number };
}

let h: Home = {
  resident: {
    name: "Mxy",
    age: 22,
  }
}
// h.resident = {
//
// }
h.resident.name = "Eucalyptus";
console.log("h resident", h.resident);
