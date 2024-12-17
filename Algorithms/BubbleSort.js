const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {                    // O(n^2) Time complexity
  let swapped;                                  // O(1) Space complexity
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

bubbleSort(numbers);
console.log(numbers);