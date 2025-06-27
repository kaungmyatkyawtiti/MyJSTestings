type TwoD = {
  x: number,
  y: number,
}

function printCoord(coord: TwoD) {
  console.log("x:", coord.x, "y:", coord.y);
}

printCoord({
  x: 19,
  y: 13,
})
