/**
 * @param {number} n
 * @return {number}
 */
let cache = {};
var climbStairs = function(n) {
    //subproblem already solved
    if (n in cache) {
        return cache[n];
    } else {
        //base case
        if (n < 3) {
            return n;
        }
        //recursive case
        else {
            cache[n] = climbStairs(n-1) + climbStairs(n-2);
            return cache[n];
        }
    }
};