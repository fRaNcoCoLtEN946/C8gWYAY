// 代码生成时间: 2025-08-08 07:21:18
 * It demonstrates error handling, documentation, and best practices for maintainability and scalability.
 */

const _ = require('lodash');

/**
 * Performs a binary search on a sorted array to find the index of a target value.
 * @param {Array} sortedArray - A sorted array of numbers.
 * @param {number} target - The target value to search for.
 * @returns {number} The index of the target value if found, -1 otherwise.
 */
function binarySearch(sortedArray, target) {
    if (!_.isArray(sortedArray) || !_.isNumber(target)) {
        throw new Error('Invalid input: expected a sorted array and a number.');
    }

    let left = 0;
    let right = sortedArray.length - 1;
    let result = -1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const midValue = sortedArray[mid];
        
        if (midValue === target) {
            result = mid;
            break;
        } else if (midValue < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return result;
}

/**
 * Performs a linear search on an array to find the index of a target value.
 * @param {Array} array - An array of elements.
 * @param {any} target - The target value to search for.
 * @returns {number} The index of the target value if found, -1 otherwise.
 */
function linearSearch(array, target) {
    if (!_.isArray(array)) {
        throw new Error('Invalid input: expected an array.');
    }

    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return i;
        }
    }
    return -1;
}

/**
 * Optimized search algorithm using Lodash to perform a deep search within an object.
 * @param {Object} obj - The object to search within.
 * @param {any} target - The target value to search for.
 * @returns {Array} An array of paths where the target value was found.
 */
function deepSearch(obj, target) {
    if (!_.isObject(obj)) {
        throw new Error('Invalid input: expected an object.');
    }

    return _.flatMap(obj, (value, key) => {
        if (_.isObject(value)) {
            return deepSearch(value, target);
        } else if (value === target) {
            return [key];
        }
        return [];
    });
}

module.exports = {
    binarySearch,
    linearSearch,
    deepSearch
};