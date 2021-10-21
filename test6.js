const hasValidPath = function (grid) {
  validPaths = [
    //  4 directions (up, right, down ,left)
    [0, 0, 0, 0], // blank street
    [0, 1, 0, 1], // 1 left  and right
    [1, 0, 1, 0], // 2 upperl and  lower
    [0, 0, 1, 1], // 3 left and  lower
    [0, 1, 1, 0], // 4 right  and  lower
    [1, 0, 0, 1], // 5 left  and upper
    [1, 1, 0, 0], // 6 right and  upper
  ];
  const grid= [
    [0, 2, 1],
    [5, 4, 2],
  ];
  let n = grid.length - 1;
 let m = grid[0].length - 1;


const dfs = function (i, j,grid) {
    if (i < 0 || i > n || j < 0 || j > m || grid[i][j] == 0) return false;
    if (i == n && j == m) return true;

    let current = grid[i][j];
    let dirs = validPaths[current];
    grid[i][j] = 0;

    // up with down
    if (
      dirs[0] == 1 && i > 0 && validPaths[grid[i - 1][j]][2] == 1 && dfs(i - 1, j, grid) ) {
      return true;
    }

    // right with left

    
    if (
      dirs[0] == 1 && i > 0 && validPaths[grid[i - 1][j]][2] == 1 &&  dfs(i - 1, j, grid) ) {
      return true;
    }
   // down with up

  // left with right




