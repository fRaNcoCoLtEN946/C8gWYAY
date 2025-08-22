// 代码生成时间: 2025-08-22 13:13:54
 * It uses lodash for string manipulation and encoding.
 *
 * @module xss_protection
 */

const _ = require('lodash');

/**
 * Sanitizes input to prevent XSS attacks.
 * It encodes special HTML characters to their respective HTML entities.
 *
 * @param {string} input - The input string to sanitize.
 * @returns {string} - The sanitized string.
 */
function sanitizeInput(input) {
  if (!_.isString(input)) {
    throw new Error('Input must be a string.');
  }
  
  // Encode HTML characters to prevent XSS
  const encodedInput = input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/'/g, '&#x27;')
    .replace(/"/g, '&quot;');
  
  return encodedInput;
}

/**
 * Test the sanitizeInput function with a potentially dangerous input.
 */
function testXSSProtection() {
  try {
    const userInput = '<script>alert(1)</script>'; // Example of a potentially dangerous input
    const sanitized = sanitizeInput(userInput);
    console.log('Sanitized Input:', sanitized);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Run the test function to demonstrate the module's functionality
testXSSProtection();