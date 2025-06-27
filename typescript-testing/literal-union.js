var st = "pending";
console.log("st", st);
function printId(id) {
    if (typeof id == "string") {
        console.log("toUpperCase", id.toUpperCase());
    }
    console.log(id);
}
printId(21);
printId("kaung");
