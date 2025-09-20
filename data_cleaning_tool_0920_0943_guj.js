// 代码生成时间: 2025-09-20 09:43:39
const _ = require('lodash');

/**
 * Data Cleaning and Preprocessing Tool
 * This tool is designed to clean and preprocess data using JS and lodash
 * @module dataCleaningTool
 */

/**
 * Removes null, undefined, and empty string values from an array
 * @param {Array} inputArray - The array to clean
 * @returns {Array} A new array without null, undefined, or empty string values
 */
function removeEmptyEntries(inputArray) {
  try {
    return _.compact(inputArray);
  } catch (error) {
    console.error('Error removing empty entries:', error);
    throw error;
  }
}

/**
 * Converts all string elements in an array to lower case
 * @param {Array} inputArray - The array to convert
 * @returns {Array} A new array with all string elements in lower case
 */
function convertStringsToLower(inputArray) {
  try {
    return _.map(inputArray, (value) => typeof value === 'string' ? value.toLowerCase() : value);
  } catch (error) {
    console.error('Error converting strings to lower case:', error);
    throw error;
  }
}

/**
 * Replaces special characters in string elements with their corresponding HTML entities
 * @param {Array} inputArray - The array to sanitize
 * @returns {Array} A new array with special characters replaced by HTML entities
 */
function sanitizeStrings(inputArray) {
  try {
    const sanitize = (str) => str.replace(/[&<>'"/]/g, (s) => {
      switch(s) {
        case '&': return '&amp;';
        case '<': return '&lt;';
        case '>': return '&gt;';
        case '\'': return '&#39;';
        case '"': return '&quot;';
        case '/': return '&#x2F;';
        default: return s;
      }
    });
    return _.map(inputArray, (value) => typeof value === 'string' ? sanitize(value) : value);
  } catch (error) {
    console.error('Error sanitizing strings:', error);
    throw error;
  }
}

/**
 * Main function to clean and preprocess data
 * @param {Array} rawData - The raw data to be cleaned and preprocessed
 * @returns {Array} Cleaned and preprocessed data
 */
function cleanAndPreprocessData(rawData) {
  try {
    if (!_.isArray(rawData)) {
      throw new Error('Input data must be an array');
    }

    // Remove null, undefined, and empty string values
    let cleanedData = removeEmptyEntries(rawData);

    // Convert all string elements to lower case
    cleanedData = convertStringsToLower(cleanedData);

    // Sanitize string elements by replacing special characters with HTML entities
    cleanedData = sanitizeStrings(cleanedData);

    return cleanedData;
  } catch (error) {
    console.error('Error in cleanAndPreprocessData:', error);
    throw error;
  }
}

// Example usage
const rawData = ['Hello', 'world', null, undefined, '', '<script>alert(1)</script>', 'HTML & Special < Characters >'];
const cleanedData = cleanAndPreprocessData(rawData);
console.log(cleanedData);