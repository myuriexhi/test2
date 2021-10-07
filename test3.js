function identity_Matrix(matrix_data) {
  //Checks whether given matrix is a square matrix or not
  for (var i = 0; i < matrix_data.length; i++) {
    rows = matrix_data.length;
    cols = matrix_data[i].length;
    if (rows != cols) {
      console.log("Matrix should be a square matrix");
      return false;
    }
  }
  for (var i = 0; i < matrix_data.length; i++) {
    for (var j = 0; j < matrix_data.length; j++) {
      if (
        (matrix_data[i][j] !== 1 && i === j) ||
        (matrix_data[i][j] && i !== j)
      ) {
        return false;
      }
    }
  }
  return true;
}
console.log(
  identity_Matrix([
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
  ])
);
console.log(
  identity_Matrix([
    [1, 0, 1],
    [0, 1, 0],
    [0, 0, 1],
  ])
);

// program to implement queue

class Queue {
  constructor() {
    this.items = [];
  }

  // add element to the queue
  enqueue(element) {
    return this.items.push(element);
  }

  // remove element from the queue
  dequeue() {
    if (this.items.length > 0) {
      return this.items.shift();
    }
  }

  // view the last element
  peek() {
    return this.items[this.items.length - 1];
  }

  // check if the queue is empty
  isEmpty() {
    return this.items.length == 0;
  }

  // the size of the queue
  size() {
    return this.items.length;
  }

  // empty the queue
  clear() {
    this.items = [];
  }
}

let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(4);
queue.enqueue(8);
console.log(queue.items);

queue.dequeue();
console.log(queue.items);

console.log(queue.peek());

console.log(queue.isEmpty());

console.log(queue.size());

queue.clear();
console.log(queue.items);
