// 代码生成时间: 2025-09-20 19:40:03
const _ = require('lodash');

/**
 * Sanitize input data to prevent SQL injection attacks.
 * 
 * @param {string} input - The user input to be sanitized.
 * @returns {string} - The sanitized input data.
 */
function sanitizeInput(input) {
    // Check if input is a string
    if (!_.isString(input)) {
        throw new Error('Input is not a string.');
    }

    // Use Lodash escape method to sanitize input
    return _.escape(input);
}

/**
 * Example usage of the sanitizeInput function.
 */
function exampleUsage() {
    try {
        // Example user input that might contain malicious code
        const userInput = "' OR '1'='1";

        // Sanitize the input
        const sanitizedInput = sanitizeInput(userInput);

        console.log("Sanitized Input: ", sanitizedInput); // Output: '&#x27; OR &#x27;1&#x27;=&#x27;1';
    } catch (error) {
        console.error("Error sanitizing input: ", error.message);
    }
}

// Run the example usage function
exampleUsage();