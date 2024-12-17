const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {        // O(n^2) Time complexity
    let smallestIndex = i;                        // O(1) Space complexity
    for (let j = i+1; j < array.length; j++) {
      if (array[j] < array[smallestIndex]) {
        smallestIndex = j;
      }
    }
    let temp = array[i];
    array[i] = array[smallestIndex];
    array[smallestIndex] = temp;
    console.log("numbers:  ", numbers);
  }
}

console.log("Unsorted: ", numbers, "\n");
selectionSort(numbers);
console.log("\nSorted:   ", numbers);