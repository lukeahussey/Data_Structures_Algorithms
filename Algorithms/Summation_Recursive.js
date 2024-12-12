function sum(n) {                                                         // O(n) time complexity
  // Base case: if n is 1, return 1 and stop recursing                    // O(n) space complexity
  if (n === 1) {
    return n;
  }
  // Recursive case: add n to the sum of numbers up to (n-1).
  return n + sum(n - 1);
}

console.log(sum(4));