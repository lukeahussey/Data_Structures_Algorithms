var fizzBuzz = function(n) {
  if (n < 1 || n > 100000) {
      throw new Error("Input outside of accepted range");
  }
  if (isNaN(n)) {
      throw new Error("Input is not a valid number");
  }    
  return constructArray(n);
};

constructArray = function(n) {
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

//console.log(fizzBuzz(0));         // throws validation error
//console.log(fizzBuzz(100001));    // throws validation error
//console.log(fizzBuzz(a));         // throws validation error
//console.log(fizzBuzz(null));      // throws validation error

console.log(fizzBuzz(1));           // ["1"]
console.log(fizzBuzz(3));           // ["1","2","Fizz"]
console.log(fizzBuzz(5));           // ["1","2","Fizz","4","Buzz"]
console.log(fizzBuzz(15));          // ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
