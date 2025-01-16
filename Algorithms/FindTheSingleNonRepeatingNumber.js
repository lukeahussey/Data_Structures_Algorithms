var singleNumber = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        let matchFound = false;
        for (let j = 0; j < nums.length; j++) {
            if (i !== j) {
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