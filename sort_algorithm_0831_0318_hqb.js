// 代码生成时间: 2025-08-31 03:18:11
const numbersArray = [5, 3, 8, 4, 2];

/**
 * Implement the bubble sort algorithm using lodash.
 * @param {Array<number>} arr - The array of numbers to sort.
 * @returns {Array<number>} The sorted array.
 */
function bubbleSort(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('Input must be an array.');
  }
  
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  
  return arr;
}

/**
 * Implement the quick sort algorithm using lodash's _.partition method.
 * @param {Array<number>} arr - The array of numbers to sort.
 * @returns {Array<number>} The sorted array.
 */
function quickSort(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('Input must be an array.');
  }
  
  if (arr.length <= 1) {
    return arr;
  }
  
  const pivot = arr[0];
  const partitioned = _.partition(arr.slice(1), (num) => num < pivot);
  
  return [...quickSort(partitioned[0]), pivot, ...quickSort(partitioned[1])];
}

/**
 * Main function to sort the array using bubble sort and quick sort,
 * and then compares the results.
 */
function main() {
  try {
    const sortedByBubble = bubbleSort(_.cloneDeep(numbersArray));
    const sortedByQuick = quickSort(_.cloneDeep(numbersArray));
    
    console.log('Sorted by Bubble Sort:', sortedByBubble);
    console.log('Sorted by Quick Sort:', sortedByQuick);
  } catch (error) {
    console.error('An error occurred:', error.message);
  }
}

// Run the main function to test the sorting algorithms.
main();