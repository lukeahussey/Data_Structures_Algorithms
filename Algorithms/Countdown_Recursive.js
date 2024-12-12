function Countdown(number) {
  // base case:
  if (number < 1) {
    return;
  }
  // recursive case:
  console.log(number);
  Countdown(number-1);
}

Countdown(10);