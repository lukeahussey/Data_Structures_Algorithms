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

  // BRUTE-FORCE APPROACH - nested for loop compares every array element to every other element
  firstRecurringCharacterBruteForce() {
    let firstRecurringIndex = undefined;                        // O(1) space complexity

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
      '\nRecurring character index: ', firstRecurringIndex === undefined ? 'N/A' : firstRecurringIndex, '\n');

    return this._characters[firstRecurringIndex];
  }

  // EFFICIENT APPROACH - stores encountered values in a JS Set, returning the current value if it is already in there
  firstRecurringCharacterEfficient() {
    const charactersSeen = new Set();                             // O(n) space complexity
    let firstRecurringIndex = undefined;

    for (let i = 0; i < this._characters.length; i++) {           // O(n) time complexity
      if (charactersSeen.has(this._characters[i])) {
        firstRecurringIndex = i;
        break;
      } else {
        charactersSeen.add(this._characters[i]);
      }
    }
    console.log('Characters array: ', this._characters, 
      '\nFirst recurring character: ', this._characters[firstRecurringIndex], 
      '\nRecurring character index: ', firstRecurringIndex === undefined ? 'N/A' : firstRecurringIndex, '\n');

    return this._characters[firstRecurringIndex];
  }
}

let finder = new RecurringCharacterFinder();

finder.characters = [2,5,1,2,3,5,1,2,4];
const result1a = finder.firstRecurringCharacterBruteForce();
const result1b = finder.firstRecurringCharacterEfficient();

finder.characters = [2,1,1,2,3,5,1,2,4];
const result2a = finder.firstRecurringCharacterBruteForce();
const result2b = finder.firstRecurringCharacterEfficient();

finder.characters = [2,3,4,5];
const result3a = finder.firstRecurringCharacterBruteForce();
const result3b = finder.firstRecurringCharacterEfficient();