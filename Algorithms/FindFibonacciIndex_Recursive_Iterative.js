// Return the nth index value of the Fibonacci sequence
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// fibonacciRecursive(6) should return 8

function fibonacciRecursive(n) {
  //base case
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  //recursive case
  return fibonacciRecursive(n-1) + fibonacciRecursive(n-2);
}

console.log(fibonacciRecursive(6));

function fibonacciIterative(n){
  let first = 0;
  let second = 1;
  let third = first + second;

  if (n === first) {
    return first;
  }
  if (n === second) {
    return second;
  }
  for (let i = 2; i <= n; i++) {
    if (i === n) {
      return third;
    }
    first = second;
    second = third;
    third = first + second
  }
}

// console.log(fibonacciIterative(6));