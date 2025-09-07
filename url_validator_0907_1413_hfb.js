// 代码生成时间: 2025-09-07 14:13:35
const lodash = require('lodash');
const fetch = require('node-fetch');

/**
 * Checks if the URL is valid and reachable.
 * @param {string} url - The URL to be validated.
 * @returns {Promise<boolean>} - A promise that resolves to true if the URL is valid and reachable, false otherwise.
 */
async function validateUrl(url) {
  // Use Lodash to check if the param is undefined or null
  if (lodash.isNil(url)) {
    throw new Error('URL cannot be null or undefined.');
  }

  // Check if the URL is a valid string
  if (typeof url !== 'string') {
    throw new TypeError('URL must be a string.');
  }

  try {
    // Use fetch to check if the URL is reachable
    const response = await fetch(url, { method: 'HEAD' });
    // If the response status is in the range 200-299, the URL is valid
    return response.ok;
  } catch (error) {
    // If an error occurs, the URL is not reachable
    console.error('Error validating URL:', error.message);
    return false;
  }
}

// Export the validateUrl function for external use
module.exports = { validateUrl };
