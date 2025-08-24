// 代码生成时间: 2025-08-24 10:28:59
 * Features:
 * - Generate random test data
 * - Handle errors and edge cases
 * - Follow JS best practices for maintainability and scalability
 */

const _ = require('lodash');

/**
 * Generates random test data
 * @param {number} count - Number of test data items to generate
 * @returns {Array} - Array of test data items
 */
function generateTestData(count) {
  if (!_.isNumber(count) || count < 1) {
    throw new Error('Invalid count. Please provide a positive integer.');
  }

  const testData = [];
  for (let i = 0; i < count; i++) {
    testData.push({
      id: _.uniqueId('test_data_'),
      name: _.sampleSize(['John', 'Jane', 'Doe', 'Smith', 'Johnson'], 2).join(' '),
      email: `${_.sampleSize(['john', 'jane', 'doe'], 1).join('')}@example.com`,
      age: _.random(18, 65)
    });
  }
  return testData;
}

/**
 * Main function to run the test data generator
 */
function main() {
  try {
    const itemCount = 10; // Number of test data items to generate
    const data = generateTestData(itemCount);
    console.log('Generated Test Data:', data);
  } catch (error) {
    console.error('Error generating test data:', error.message);
  }
}

// Run the main function
main();