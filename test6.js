const grid = [
  [0, 2, 1],
  [5, 4, 0],
];
const hasValidPath = function (grid) {
  validPaths = [
    //  4 directions (up, right, down ,left)
    [0, 0, 0, 0], // blank street
    [0, 1, 0, 1], // 1 left  and right
    [1, 0, 1, 0], // 2 upper and  lower
    [0, 0, 1, 1], // 3 left and  lower
    [0, 1, 1, 0], // 4 right  and  lower
    [1, 0, 0, 1], // 5 left  and upper
    [1, 1, 0, 0], // 6 right and  upper
  ];

  let n = grid.length - 1;
  let m = grid[0].length - 1;

  const dfs = function (i, j, grid) {
    if (i < 0 || i > n || j < 0 || j > m || grid[i][j] == 0) return false;
    if (i == n && j == m) return true;

    let current = grid[i][j];
    let dirs = validPaths[current];
    grid[i][j] = 0;

    // up with down

    if (
      dirs[0] == 1 &&
      i > 0 &&
      validPaths[grid[i - 1][j]][2] == 1 &&
      dfs(i - 1, j, grid)
    ) {
      return true;
    }

    // right with left
    if (
      dirs[1] == 1 &&
      j < m &&
      validPaths[grid[i][j + 1]][3] == 1 &&
      dfs(i, j + 1, grid)
    ) {
      return true;
    }

    // down with up
    if (
      dirs[2] == 1 &&
      i < n &&
      validPaths[grid[i + 1][j]][0] == 1 &&
      dfs(i + 1, j, grid)
    ) {
      return true;
    }

    // left with right
    if (
      dirs[3] == 1 &&
      j > 0 &&
      validPaths[grid[i][j - 1]][1] == 1 &&
      dfs(i, j - 1, grid)
    ) {
      return true;
    }

    grid[i][j] = current;
    return false;
  };
  return dfs(0, 0, grid);
};

console.log(hasValidPath(grid));

/////////////////////////////////////////////////////////////////////////////////
/*
var hasValidPath = function(grid) {
  const m = grid.length;
  const n = grid[0].length;
  
  const dirs = {
      "left": [0, -1, "right"],
      "right": [0, 1, "left"],
      "up": [-1, 0, "down"],
      "down": [1, 0, "up"]
  };
  
  const paths = {
      0: ["left", "right"],
      1: ["up", "down"],
      2: ["left", "down"],
      3: ["right", "down"],
      4: ["up", "left"],
      5: ["up", "right"]
  };


*/
