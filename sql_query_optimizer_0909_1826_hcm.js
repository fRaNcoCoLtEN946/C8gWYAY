// 代码生成时间: 2025-09-09 18:26:41
// sql_query_optimizer.js
// This module is a simple SQL query optimizer using Lodash for common operations.

const _ = require('lodash');

/**
 * Optimizes a given SQL query by reordering the SELECT clause based on column frequency.
 * @param {string} query - The SQL query to optimize.
 * @returns {string} The optimized SQL query.
 */
function optimizeQuery(query) {
  // Extract the SELECT clause from the query
  const selectClause = extractSelectClause(query);
  if (!selectClause) {
    throw new Error('Invalid SQL query: SELECT clause not found.');
  }

  // Split the SELECT clause into individual columns
  const columns = selectClause.split(', ').map(column => column.trim());

  // Calculate the frequency of each column in the query
  const frequencyMap = calculateColumnFrequency(query, columns);

  // Sort the columns based on their frequency
  const sortedColumns = _.sortBy(columns, column => -frequencyMap[column]);

  // Reconstruct the SELECT clause with the sorted columns
  const optimizedSelectClause = sortedColumns.join(', ');

  // Replace the original SELECT clause with the optimized one
  return query.replace(selectClause, optimizedSelectClause);
}

/**
 * Extracts the SELECT clause from the given SQL query.
 * @param {string} query - The SQL query to extract from.
 * @returns {string} The SELECT clause or null if not found.
 */
function extractSelectClause(query) {
  const match = query.match(/SELECT (.*?) FROM/i);
  return match ? match[1] : null;
}

/**
 * Calculates the frequency of each column in the SQL query.
 * @param {string} query - The SQL query to analyze.
 * @param {Array<string>} columns - The columns to calculate frequency for.
 * @returns {Object} A map of column frequencies.
 */
function calculateColumnFrequency(query, columns) {
  const frequencyMap = _.reduce(columns, (acc, column) => {
    acc[column] = (query.match(new RegExp(column, 'gi')) || []).length;
    return acc;
  }, {});
  return frequencyMap;
}

// Example usage:
try {
  const query = 'SELECT name, age, email FROM users WHERE age > 30;';
  const optimizedQuery = optimizeQuery(query);
  console.log('Optimized Query:', optimizedQuery);
} catch (error) {
  console.error('Error:', error.message);
}
