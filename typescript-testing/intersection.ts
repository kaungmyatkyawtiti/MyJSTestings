interface TwoD {
  x: number,
  y: number,
}

type Another = TwoD & {
  z: number,
}

let another: Another = {
  x: 10,
  y: 20,
  z: 30,
}
console.log("threeD", another);
