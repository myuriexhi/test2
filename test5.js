/*
let arr = [1, 2, 3, 4, 5];

function countTriplets(n, sum) {
  // Initialize result
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
*/
/*
function CountTriplets(arr, queries) {
  let cnt = 0;

  for (let i = 0; i < n; i++)
    for (let j = i + 1; j < n; j++)
      for (let k = j + 1; k < n; k++)
        if (arr[k] < arr[i] && arr[i] < arr[j]) {
          cnt += 1;
        }
  return cnt;
}

let arr = [1, 2, 3, 4, 5];
let queries = [
  [1, 2, 4],
  [2, 4, 3],
  [1, 1, 1],
];

let n = arr.length;

console.log(CountTriplets(arr.length, queries.length));
*/

// const arr = [1, 2, 3, 4, 5];
// const queries = [
//   [1, 2, 4],
//   [2, 4, 3],
//   [1, 1, 1],
// ];
// function findTheTriples(arr, queries) {
//   let count = 0;
//   let n = arr.length;
//   let m = queries.length;

//   for (let i = 0; i < n; i++) {
//     for (let j = i + 1; j < n; j++) {
//       for (let k = j + 1; k < n; k++)
//         if (arr[k] < arr[i] && arr[i] < arr[j]) {
//           count += 1;
//         }
//     }
//   }
// }
// console.log(findTheTriples(arr.length, queries.length));
