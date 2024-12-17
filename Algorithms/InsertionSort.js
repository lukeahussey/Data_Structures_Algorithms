const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
const numbers2 = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort_NestedForAndWhileLoops(array) {
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

function insertionSort_NestedForLoops(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] < array[0]) {
      // Move number to array index 0
      array.unshift(array.splice(i, 1)[0]);
    } else {
      // Find correct number location
      for (let j = 1; j < i; j++) {
        if (array[i] > array[j - 1] && array[i] < array[j]) {
          // Move number to correct index
          array.splice(j, 0, array.splice(i, 1)[0]);
        }
      }
    }
    console.log("numbers: ", numbers2);
  }

  return array;
}

console.log("Unsorted: ", numbers, "\n");
insertionSort_NestedForAndWhileLoops(numbers);
console.log("\nSorted:   ", numbers);

console.log("\n\nUnsorted: ", numbers2, "\n");
insertionSort_NestedForLoops(numbers2);
console.log("\nSorted:   ", numbers2);