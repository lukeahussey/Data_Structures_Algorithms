// Return the nth index value of the Fibonacci sequence
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// fibonacciRecursive(6) should return 8

function fibonacciRecursive(n) {    // O(2^n) exponential time complexity
  //base case
  if (n < 2) {
    return n;
  }
  //recursive case
  return fibonacciRecursive(n-1) + fibonacciRecursive(n-2);
}

console.log(fibonacciRecursive(6));

function fibonacciIterative(n){     // O(n) linear time complexity
  // O(n) extra space
  let arr = [0,1];
  for (let i = 2; i <= n; i++) {
    arr.push(arr[i-1] + arr[i-2]);
  }
  return arr[n];

  // // Two pointer approach with O(1) extra space
  // let first = 0;
  // let second = 1;
  // let third = first + second;

  // if (n === first) {
  //   return first;
  // }
  // if (n === second) {
  //   return second;
  // }
  // for (let i = 2; i <= n; i++) {
  //   if (i === n) {
  //     return third;
  //   }
  //   first = second;
  //   second = third;
  //   third = first + second
  // }
}

// console.log(fibonacciIterative(6));