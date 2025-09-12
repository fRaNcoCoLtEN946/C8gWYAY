// 代码生成时间: 2025-09-13 05:00:35
const _ = require('lodash');

/**
 * Sanitizes input to prevent XSS attacks
 * @param {string} input - The user input to be sanitized
 * @returns {string} Sanitized input
 */
function sanitizeInput(input) {
  // Check if input is a string
  if (!_.isString(input)) {
    throw new Error('Input must be a string');
  }

  // Use lodash.escape to escape HTML entities
  return _.escape(input);
}

/**
 * Example usage of the sanitizeInput function
 */
try {
  const userInput = '<script>alert("xss")</script>';
  const sanitizedInput = sanitizeInput(userInput);
  console.log('Sanitized Input:', sanitizedInput); // Should log sanitized version of the input
} catch (error) {
  console.error('Error sanitizing input:', error.message);
}
