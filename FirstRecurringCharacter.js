// BRUTE-FORCE APPROACH - uses nested for loop to compare every array element to every other element
function FirstRecurringCharacterBF(characters) {
  let firstRecurringIndex = undefined;                  // O(1) space complexity
  for (let i = 0; i < characters.length - 1; i++) {
    for (let j = i + 1; j < characters.length; j++) {   // O(n^2) time complexity
      if (characters[i] === characters[j]) {
        if (firstRecurringIndex === undefined || j < firstRecurringIndex) {
          firstRecurringIndex = j;
        }
      }
    }
  }
  return characters[firstRecurringIndex];
}

let charactersBF = [2,5,1,2,3,5,1,2,4];
const resultBF = FirstRecurringCharacterBF(charactersBF);
console.log('Characters array: ', charactersBF, '\nFirst recurring character: ', resultBF);

charactersBF = [2,1,1,2,3,5,1,2,4];
const resultBF2 = FirstRecurringCharacterBF(charactersBF);
console.log('Characters array: ', charactersBF, '\nFirst recurring character: ', resultBF2);

charactersBF = [2,3,4,5];
const resultBF3 = FirstRecurringCharacterBF(charactersBF);
console.log('Characters array: ', charactersBF, '\nFirst recurring character: ', resultBF3);