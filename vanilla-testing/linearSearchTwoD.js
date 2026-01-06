const arr = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9],
  [10, 12, 13, 14, 15],
];

const num = 9;

outer: for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    if (arr[i][j] == num) {
      console.log(`found at index i ${i} and index j ${j}`);
      break outer;
    }
    console.log("loop j", j);
  }
  console.log("loop i", i);
}
