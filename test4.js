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
      var x = k - (bottomToTop ? rows - y : y);
      // var x = k - y;
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
