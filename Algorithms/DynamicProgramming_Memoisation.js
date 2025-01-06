function memoizeAddTo9000(n) { 
  let cache = {};                     // Cache is now scoped not global
  return function(n) {                // SCOPING - returns function with access to cache
    if (n in cache) {
      console.log('BYPASSING long, complex operation using memoization');
      return cache[n];
    } else {
      console.log('long, complex operation');
      const answer = n + 9000;
      cache[n] = answer;
      return answer;
    }
  }
}

const memoized = memoizeAddTo9000();
console.log(1, memoized(6))
console.log(2, memoized(6))

// let cache = {};

// function memoizeAddTo9000(n) {
//   if (n in cache) {
//     console.log('BYPASSING long, complex operation using memoization');
//     return cache[n];
//   } else {
//     console.log('long, complex operation');
//     const answer = n + 9000;
//     cache[n] = answer;
//     return answer;
//   }
// }

// console.log(1, memoizeAddTo9000(6))
// console.log(2, memoizeAddTo9000(6))