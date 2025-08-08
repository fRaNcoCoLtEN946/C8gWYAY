// 代码生成时间: 2025-08-08 23:56:40
// Import the lodash library
const _ = require('lodash');

/**
 * Trims whitespace from the start and end of a string.
 * @param {string} value - The string to trim.
 * @returns {string} The trimmed string.
 */
function trimString(value) {
  return _.trim(value);
}

/**
 * Converts a string to lowercase.
 * @param {string} value - The string to convert.
 * @returns {string} The lowercase string.
 */
function toLowerCase(value) {
  return _.toLower(value);
}

/**
 * Removes any non-alphanumeric characters from a string.
 * @param {string} value - The string to sanitize.
 * @returns {string} The sanitized string with only alphanumeric characters.
 */
function sanitizeString(value) {
  return _.replace(value, /[^a-z0-9]/gi, '');
}

/**
 * Replaces multiple spaces with a single space.
 * @param {string} value - The string to normalize spaces.
 * @returns {string} The string with normalized spaces.
 */
function normalizeSpaces(value) {
  return _.replace(value, /\s+/g, ' ');
}

/**
 * Removes leading zeros from a string that represents a number.
 * @param {string} value - The string to remove leading zeros.
 * @returns {string} The string without leading zeros.
 */
function removeLeadingZeros(value) {
  return _.replace(value, /^0+(?=\d)/, '');
}

/**
 * Main function to clean and preprocess data.
 * @param {Array} data - The array of data to be cleaned and preprocessed.
 * @returns {Array} The cleaned and preprocessed data.
 */
function cleanAndPreprocessData(data) {
  try {
    // Check if the data is an array
    if (!_.isArray(data)) {
      throw new Error('Input data must be an array.');
    }

    // Apply trim, lowercase, sanitize, normalize spaces, and remove leading zeros to each string element
    return _.map(data, (item) => {
      if (_.isString(item)) {
        return removeLeadingZeros(normalizeSpaces(sanitizeString(toLowerCase(trimString(item)))));
      }
      return item; // Non-string elements are returned unchanged
    });
  } catch (error) {
    console.error('Error cleaning and preprocessing data:', error.message);
    throw error; // Re-throw the error for further handling
  }
}

// Example usage:
const exampleData = ['  Example Data 1  ', '123456', '  example data 2 ', '0000456'];
const cleanedData = cleanAndPreprocessData(exampleData);
console.log(cleanedData); // Output: ['example data 1', '123456', 'example data 2', '456']
  