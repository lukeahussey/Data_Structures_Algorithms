let nonDynamicCalculations = 0;

function fibonacci(n) {   //O(2^n) - Exponential Time Complexity
  nonDynamicCalculations++;
  if (n < 2) {            // Base case
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

fibonacci(10);
console.log('nonDynamicCalculations: ', nonDynamicCalculations);

