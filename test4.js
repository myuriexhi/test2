//left-to-right & bottom-to-top

const matrix = [
  [1, 3, 9, 4],
  [9, 5, 7, 7],
  [3, 6, 9, 7],
  [1, 2, 2, 2],
];
function diagonalSort(matrix, bottomToTop) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const maxLength = Math.max(cols, rows);
  let temp;

  for (let k = 0; k <= 2 * (maxLength - 1); ++k) {
    temp = [];
    for (let y = rows - 1; y >= 0; --y) {
      let x = k - (bottomToTop ? rows - y : y);
      //   let x = k - y;
      if (x >= 0 && x < cols) {
        temp.push(matrix[y][x]);
      }
    }
    if (temp.length > 0) {
      console.log(temp);
    }
  }
}
diagonalSort(matrix);
diagonalSort(matrix, true);

//////////////////////////////////////////////////////////////////////////////

const matrix1 = [
  [1, 3, 9, 4],
  [9, 5, 7, 7],
  [3, 6, 9, 7],
  [1, 2, 2, 2],
];
const cols = matrix1[0].length;
const rows = matrix1.length;
const maxLength = Math.max(cols, rows);
let tempArr = [];
let result = [];

for (let k = 0; k <= 2 * (maxLength - 1); k++) {
  let temp = [];
  for (let y = cols - 1; y >= 0; y--) {
    let x = k - y;

    if (x >= 0 && x < rows) {
      temp.push(matrix1[y][x]);
    }
  }

  if (temp.length > 0) {
    tempArr.push(temp.sort());
  }
}

for (let k = 0; k <= maxLength - 1; k++) {
  let tempResult = [];
  let arr = tempArr.filter((a) => a.length > 0);

  for (let i = 0; i <= maxLength - 1; i++) {
    const length = arr[i].length;
    tempResult.push(arr[i][length - 1]);
    tempArr[tempArr.indexOf(arr[i])].pop();
  }
  result.push(tempResult);
}
console.log(result);
