// Brute-force/Naive approach: compare every element with every other element to see if it reoccurs
var singleNumber = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        let matchFound = false;
        for (let j = 0; j < nums.length; j++) {             // O(n^2) time complexity
            if (i !== j) {                                  // O(1) space complexity
                if (nums[j] === num) {
                    matchFound = true;
                    break;
                }
            }
        }
        if (!matchFound) {
            return num;
        }
    }
};

console.log(singleNumber([2,2,1]));          // 1
console.log(singleNumber([4,1,2,1,2]));      // 4
console.log(singleNumber([1]));              // 1


// Efficient approach: Linear space and Linear time
var singleNumberEfficient = function(nums) {
  const countMap = new Map();                             // O(n) space complexity

  for (const num of nums) {
      countMap.set(num, (countMap.get(num) || 0) + 1);    // O(n) time complexity
  }

  for (const [num, count] of countMap.entries()) {        // O(n) time complexity
      if (count === 1) {
          return num;
      }
  }
};

console.log(singleNumberEfficient([2,2,1]));          // 1
console.log(singleNumberEfficient([4,1,2,1,2]));      // 4
console.log(singleNumberEfficient([1]));              // 1