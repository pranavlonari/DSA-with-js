function mergeSortedArrays(arr1, arr2) {
  // Calculate the total length of the merged array
  const totalLength = arr1.length + arr2.length;
  const mergedArray = new Array(totalLength);

  // Initialize indices for arr1, arr2, and mergedArray
  let i = 0, j = 0, k = 0;

  // Compare elements from both arrays and merge them into the result array
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      mergedArray[k] = arr1[i];
      i++;
    } else {
      mergedArray[k] = arr2[j];
      j++;
    }
    k++;
  }

  // Copy any remaining elements from arr1
  while (i < arr1.length) {
    mergedArray[k] = arr1[i];
    i++;
    k++;
  }

  // Copy any remaining elements from arr2
  while (j < arr2.length) {
    mergedArray[k] = arr2[j];
    j++;
    k++;
  }

  return mergedArray;
}

const arr1 = [0, 3, 4, 31];
const arr2 = [3, 4, 6, 30];

const result = mergeSortedArrays(arr1, arr2);

console.log(result);
// Output: [0, 3, 3, 4, 4, 6, 30, 31]
