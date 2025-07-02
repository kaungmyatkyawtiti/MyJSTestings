interface TwoD {
  x: number,
  y: number,
}

interface ThreeD extends TwoD {
  z: number,
}

let threeD: ThreeD = {
  x: 10,
  y: 20,
  z: 30,
}
console.log("threeD", threeD);
