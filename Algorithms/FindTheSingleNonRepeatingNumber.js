var singleNumber = function(nums) {
    // Brute-force/Naive approach: compare every element with every other element to see if it reoccurs
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