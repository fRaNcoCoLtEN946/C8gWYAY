// 代码生成时间: 2025-08-23 23:41:30
const _ = require('lodash');

/**
 * Compare function for sorting numbers in ascending order.
 *
 * @param {number} a - The first number to compare.
 * @param {number} b - The second number to compare.
 * @returns {number} -1 if a < b, 1 if a > b, and 0 if a = b.
 */
function compareAscending(a, b) {
  return a - b;
}

/**
 * Implementation of bubble sort algorithm.
 *
 * @param {Array} array - The array to be sorted.
 * @returns {Array} - The sorted array.
 */
function bubbleSort(array) {
  if (!_.isArray(array)) {
    throw new Error('Input must be an array.');
  }

  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        _.shuffle(array[i], array[i + 1]);
        swapped = true;
      }
    }
  } while (swapped);

  return array;
}

/**
 * Implementation of selection sort algorithm.
 *
 * @param {Array} array - The array to be sorted.
 * @returns {Array} - The sorted array.
 */
function selectionSort(array) {
  if (!_.isArray(array)) {
    throw new Error('Input must be an array.');
  }

  for (let i = 0; i < array.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      _.shuffle(array[i], array[minIndex]);
    }
  }

  return array;
}

/**
 * Implementation of insertion sort algorithm.
 *
 * @param {Array} array - The array to be sorted.
 * @returns {Array} - The sorted array.
 */
function insertionSort(array) {
  if (!_.isArray(array)) {
    throw new Error('Input must be an array.');
  }

  for (let i = 1; i < array.length; i++) {
    let current = array[i];
    let j = i - 1;

    while (j >= 0 && array[j] > current) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = current;
  }

  return array;
}

/**
 * Implementation of quicksort algorithm using Lodash's shuffle for swapping elements.
 *
 * @param {Array} array - The array to be sorted.
 * @param {number} [start] - Starting index for the partitioning.
 * @param {number} [end] - Ending index for the partitioning.
 * @returns {Array} - The sorted array.
 */
function quickSort(array, start = 0, end = array.length - 1) {
  if (!_.isArray(array)) {
    throw new Error('Input must be an array.');
  }

  if (start < end) {
    let pivotIndex = partition(array, start, end);
    quickSort(array, start, pivotIndex - 1);
    quickSort(array, pivotIndex + 1, end);
  }

  return array;
}

/**
 * Helper function to partition the array for quicksort.
 *
 * @param {Array} array - The array to be partitioned.
 * @param {number} start - Starting index for the partitioning.
 * @param {number} end - Ending index for the partitioning.
 * @returns {number} - The pivot index after partitioning.
 */
function partition(array, start, end) {
  let pivot = array[end];
  let i = start;

  for (let j = start; j < end; j++) {
    if (array[j] < pivot) {
      _.shuffle(array[i], array[j]);
      i++;
    }
  }
  _.shuffle(array[i], array[end]);
  return i;
}

// Example usage:
const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
console.log('Sorted array using bubble sort:', bubbleSort([...numbers]));
console.log('Sorted array using selection sort:', selectionSort([...numbers]));
console.log('Sorted array using insertion sort:', insertionSort([...numbers]));
console.log('Sorted array using quick sort:', quickSort([...numbers]));
