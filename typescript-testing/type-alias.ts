type Point = {
  x: number,
  y: number,
}

type Another = {
  z: number,
}

type Point3D = Point & Another;

let towD: Point = {
  x: 11,
  y: 13,
};
console.log(towD);

type Amount = number;
let num: Amount = 10;
console.log(num);

let threeD: Point3D = {
  x: 13,
  y: 17,
  z: 19,
}
console.log(threeD);
