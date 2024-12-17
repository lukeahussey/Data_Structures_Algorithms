const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let index = i;
    while (index > 0) {
      if (array[index] >= array[index-1]) {
        break;
      }        
      let temp = array[index-1];
      array[index-1] = array[index];
      array[index] = temp;
      index--;
    }
    console.log("numbers: ", numbers);
  }
}

console.log("Unsorted: ", numbers, "\n");
insertionSort(numbers);
console.log("\nSorted:   ", numbers);