function findFactorialRecursive(number) {
  // // Streamlined code
  if (number === 2) {
    return 2;
  }
  return answer *= findFactorialRecursive(number-1);

  // // VERBOSE code with logging
  // console.log("Call stack PUSH for number: ", number);
  
  // let answer = number;

  // if (number < 3) {
  //   console.log("Call stack POP for number: ", number);
  //   console.log("Running total: ", answer);
  //   return answer;
  // }

  // console.log(`Current stack calculation: ${answer} * ${number-1}`);

  // answer *= findFactorialRecursive(number-1);

  // console.log("Call stack POP for number: ", number);
  // console.log("Running total: ", answer);
  
  // return answer;
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
console.log(findFactorialRecursive(8));
