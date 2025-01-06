let cache = {};

function memoizeAddTo80(n) {
  if (n in cache) {
    console.log('BYPASSING long, complex operation using memoization');
    return cache[n];
  } else {
    console.log('long, complex operation');
    const answer = n + 80;
    cache[n] = answer;
    return answer;
  }
}

console.log(1, memoizeAddTo80(6))
console.log(2, memoizeAddTo80(6))