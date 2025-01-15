var fizzBuzz = function(n) {
  if (n < 1 || n > 100000) {
      throw new Error("Input outside of accepted range");
  }
  if (isNaN(n)) {
      throw new Error("Input is not a valid number");
  }
  
  let arr = [];                           //O(n) space complexity
  for (let i = 1; i <= n; i++) {          //O(n) time complexity
      let tempString = "";
      if (i % 3 === 0) {
          tempString += "Fizz";
      }
      if (i % 5 === 0) {
          tempString += "Buzz";
      }
      if (tempString === "") {
          tempString += i;
      }
      arr[i-1] = tempString;
  }
  return arr;
}

console.log(fizzBuzz(15)); // ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]