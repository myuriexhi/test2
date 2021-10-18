/*
let arr = [1, 2, 3, 4, 5];

function countTriplets(n, sum) {
  let ans = 0;

  for (let i = 0; i < n - 2; i++) {
    
    for (let j = i + 1; j < n - 1; j++) {
 
      for (let k = j + 1; k < n; k++) if (arr[i] + arr[j] + arr[k] < sum) ans++;
    }
  }
  return ans;
}

let sum = 12;
console.log(countTriplets(arr.length, sum));


// given conditions
function CountTriplets(arr, n) {
  let cnt = 0;

  for (let i = 0; i < n; i++)
    for (let j = i + 1; j < n; j++)
      for (let k = j + 1; k < n; k++)
        // If it satisfy the
        // given conditions
        if (arr[k] < arr[i] && arr[i] < arr[j]) {
          cnt += 1;
        }

  // Return the final count
  return cnt;
}

// Given array arr[]
let arr = [2, 5, 1, 3, 0];

let n = arr.length;

// Function Call
console.log(CountTriplets(arr, n));
*/

/////////////////////////////////////////////////////////////////////////////

const Arr = [1, 2, 4, 1, 4, 1, 2];
const queries = [
  [1, 4, 4],
  [1, 2, 1],
];
let n = Arr.length;
let m = queries.length;
let findTheTriples = [0];
function countTriplets(x1, x2, x3) {
  let ans = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        let y1 = Arr[i];
        let y2 = Arr[j];
        let y3 = Arr[k];
        if (x1 == y1) {
          if (x2 == y2) {
            if (x3 == y3) {
              ans += 1;
            }
          }
        }
      }
    }
  }
  return ans;
}
for (let i = 0; i < m; i++) {
  let z1 = queries[i][0];
  let z2 = queries[i][1];
  let z3 = queries[i][2];

  let Result = countTriplets(z1, z2, z3);
  findTheTriples[i] = Result;
}
console.log(findTheTriples);
