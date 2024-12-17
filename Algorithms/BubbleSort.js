const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
const numbers2 = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {                      // O(n^2) Time complexity
  for (let i = 0; i < array.length; i++) {        // O(1) Space complexity
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j+1]) {
        let holdingValue = array[j];
        array[j] = array[j+1];
        array[j+1] = holdingValue;
      }
    }
  }
}

function bubbleSort_alt(array) {                  // O(n^2) Time complexity
  let swapped;                                    // O(1) Space complexity
  do {
    swapped = false;
    for (let i = 1; i < array.length; i++) {
      if (array[i-1] > array[i]) {
        let holdingValue = array[i];
        array[i] = array[i-1];
        array[i-1] = holdingValue;
        swapped = true;
      }
    }
  }
  while (swapped)
}

console.log("Unsorted: ", numbers);
bubbleSort(numbers);
console.log("Sorted: ", numbers);

console.log("Unsorted: ", numbers2);
bubbleSort_alt(numbers2);
console.log("Sorted: ", numbers2);