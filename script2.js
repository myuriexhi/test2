const items = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] //… your array, filled with values
const n = 3 //tweak this to add more items per line

const result = new Array(Math.ceil(items.length / n))
  .fill()
  .map(_ => items.splice(0, n))



  Array.prototype.chunk = function(size) {
    let result = [];
    
    while(this.length) {
        result.push(this.splice(0, size));
    }
        
    return result;
}

const arr = [2,1,2,3,3,4];
console.log(arr.chunk(2));