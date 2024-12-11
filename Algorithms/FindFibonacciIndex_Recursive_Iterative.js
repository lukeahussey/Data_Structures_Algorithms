// Return the nth index value of the Fibonacci sequence
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// fibonacciRecursive(6) should return 8

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


function fibonacciRecursive(n) {
  
}

console.log(fibonacciIterative(8));