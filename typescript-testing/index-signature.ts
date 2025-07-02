interface StringArr {
  [index: number]: string;
}

const myArray: StringArr = ["apple", "orange"];
const secondItem = myArray[1];
console.log("secondItem", secondItem);
