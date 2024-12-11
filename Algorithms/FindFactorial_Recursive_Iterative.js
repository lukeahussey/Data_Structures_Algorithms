function findFactorialRecursive(number) {
  //
  return answer;
}

function findFactorialIterative(number) {
  if (isNaN(number)) {
    throw new Error("Input is not a valid number");
  }
  
  let answer = number;
  for (let i = number; i > 1; i--) {
    answer *= i-1;
  }
  return answer;
}

console.log(findFactorialIterative(8));
