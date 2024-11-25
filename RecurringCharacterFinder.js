class RecurringCharacterFinder {
  constructor() {
    this._characters = [];
  }

  get characters() {
    return this._characters;
  }

  set characters(newCharacters) {
    if (Array.isArray(newCharacters)) {
      this._characters = newCharacters;
    } else {
      console.error('Invalid input - newCharacters is not a valid input array.');
    }
  }

  // BRUTE-FORCE APPROACH - uses nested for loop to compare every array element to every other element
  firstRecurringCharacterBruteForce() {
    let firstRecurringIndex = undefined;                  // O(1) space complexity
    for (let i = 0; i < this._characters.length - 1; i++) {
      for (let j = i + 1; j < this._characters.length; j++) {   // O(n^2) time complexity
        if (this._characters[i] === this._characters[j]) {
          if (firstRecurringIndex === undefined || j < firstRecurringIndex) {
            firstRecurringIndex = j;
          }
        }
      }
    }
    console.log('Characters array: ', this._characters, 
      '\nFirst recurring character: ', this._characters[firstRecurringIndex], 
      '\nRecurring character index: ', firstRecurringIndex, '\n');

    return this._characters[firstRecurringIndex];
  }
}

let finder = new RecurringCharacterFinder();

finder.characters = [2,5,1,2,3,5,1,2,4];
const result = finder.firstRecurringCharacterBruteForce();

finder.characters = [2,1,1,2,3,5,1,2,4];
const result2 = finder.firstRecurringCharacterBruteForce();

finder.characters = [2,3,4,5];
const result3 = finder.firstRecurringCharacterBruteForce();