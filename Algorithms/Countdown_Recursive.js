function Countdown(number) {      // O(n) time complexity
  // base case:                   // O(n) space complexity
  if (number < 1) {
    return;
  }
  // recursive case:
  console.log(number);
  Countdown(number-1);
}

Countdown(10);