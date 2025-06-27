type Status = "pending" | "fullfilled" | "rejected";

let st: Status = "pending";
console.log("st", st);

function printId(id: number | string) {
  if (typeof id == "string") {
    console.log("toUpperCase", id.toUpperCase());
  } else {
    console.log(id * 2);
  }
}
printId(21);
printId("kaung");
