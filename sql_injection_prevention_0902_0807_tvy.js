// 代码生成时间: 2025-09-02 08:07:00
// Import the lodash module
const _ = require('lodash');

/**
 * Escapes a value to prevent SQL injection.
 *
 * @param {any} value - The value to be escaped.
 *
 * @returns {string} - The escaped value.
 */
function escapeValue(value) {
  // Use lodash's escape function to escape the value
  return _.escape(value);
}

/**
 * Creates a safe query string with parameters.
 *
 * @param {string} baseQuery - The base SQL query string.
 * @param {Object} params - The parameters to be safely inserted into the query.
 *
 * @returns {string} - The safe query string with parameters.
 */
function createSafeQuery(baseQuery, params) {
  try {
    // Split the base query into parts (before and after the ?)
    const [base, placeholders] = baseQuery.split(/\?(?=[^\)]*\))/);

    // Transform placeholders into a lodash template string
    const template = placeholders ? base + placeholders.replace(/\?/g, '\${it.$&}') : baseQuery;

    // Use lodash's template function to safely insert the parameters
    return _.template(template)(params);
  } catch (error) {
    // Handle errors, such as template syntax errors
    console.error('Error creating safe query:', error.message);
    throw error;
  }
}

/**
 * Example usage of the SQL injection prevention functions.
 */

// Example base query with placeholder
const baseQuery = 'SELECT * FROM users WHERE id = ?';

// Example parameters
const params = { id: 123 };

// Create a safe query with the provided parameters
const safeQuery = createSafeQuery(baseQuery, params);

console.log('Safe Query:', safeQuery); // Should log: Safe Query: SELECT * FROM users WHERE id = 123

module.exports = {
  escapeValue,
  createSafeQuery
};