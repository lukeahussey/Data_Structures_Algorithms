let nonDynamicCalculations = 0;

function fibonacci(n) {                   //O(2^n) - Exponential Time Complexity
  nonDynamicCalculations++;
  console.log('Calculating fibonacci of', n);
  // Base case
  if (n < 2) {
    return n;
  }
  console.log('Calculating fibonacci of', n - 1, 'and', n - 2); // This is the recursive call
  return fibonacci(n - 1) + fibonacci(n - 2);
}


let dynamicCalculations = 0;

function fibonacciDynamicProgramming() {  //O(n) - Linear Time Complexity
  let cache = {};
  return function fib(n) {
    dynamicCalculations++;
    // Subproblem already solved
    if (n in cache) {
      return cache[n];
    } else {
      // Base case
      if (n < 2) {
        return n;
      } else {
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
      }
    }
  }
}

console.log('Non-DP', fibonacci(10));
console.log('nonDynamicCalculations: ', nonDynamicCalculations);
const dynamicFibonacci = fibonacciDynamicProgramming();
console.log('DP', dynamicFibonacci(10));
console.log('dynamicCalculations: ', dynamicCalculations);