function mergeSortedArrays(arr1, arr2) {
  let arraySize = arr1.length + arr2.length;
  let outputArray = new Array(arraySize);
  let arr1Pointer = 0;
  let arr2Pointer = 0;
  
  for (let i = 0; i <= arraySize-1; i++) {
    if (arr1[arr1Pointer] === undefined) {
      outputArray[i] = arr2[arr2Pointer];
      arr2Pointer++;
    }
    else if (arr2[arr2Pointer] === undefined) {
      outputArray[i] = arr1[arr1Pointer];
      arr1Pointer++;
    }
    if (arr1[arr1Pointer] <= arr2[arr2Pointer]) {
      outputArray[i] = arr1[arr1Pointer];
      arr1Pointer++;
    }
    else if (arr2Pointer <= arr2.length-1) {
      outputArray[i] = arr2[arr2Pointer];
      arr2Pointer++;
    }
  }
  
  return outputArray;
}

const testArray = mergeSortedArrays([0,3,4,31], [1,3,5,30,32]);
console.log("testArray: " + testArray);