function reverseString_Iterative(str) {                     // O(n^2) time complexity
  console.log(`str: "${str}"`);                             // O(n) space complexity
  let reversed = '';
  for (let i = str.length-1; i >= 0; i--) {
    reversed += str[i];
  }
  console.log(`reversed: "${reversed}"`);
}

reverseString_Iterative("Hello my name is Luke");

function reverseString_Recursive(str) {                     // O(n^2) time complexity
  // base case                                              // O(n) space complexity
  // if the input string has less than 2 characters then it is already "reversed"
  if (str.length < 2) {
    return str;
  }
  // recursive case
  // reverse the substring starting at index 1 then add the character at index 0 to the end
  return reverseString_Recursive(str.slice(1)) + str.charAt(0);
}

let str = "Hello my name is Luke";
console.log(`str: "${str}"`);
console.log(`reversed: "${reverseString_Recursive(str)}"`);

function reverseString_Recursive_Arrays(str) {
  console.log(`str: "${str}"`);
  let arrayStr = str.split("");
  let reversedArray = [];
  function addToArray(array) {
    if (array.length > 0) {
      reversedArray.push(array.pop());
      addToArray(array);
    }
    return;
  }
  addToArray(arrayStr);
  const reversedStr = reversedArray.join("");
  console.log(`reversedStr: "${reversedStr}"`);
  return reversedStr;
}

reverseString_Recursive_Arrays(str);