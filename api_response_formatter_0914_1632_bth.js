// 代码生成时间: 2025-09-14 16:32:27
// Import the lodash library
const _ = require('lodash');

/**
 * Formats an API response by adding a specific structure and error handling.
 * @param {Object} response - The original API response.
 * @param {Object} options - Options to customize the response format.
 * @returns {Object} - The formatted API response.
 */
function formatApiResponse(response, options) {
  // Destructure the options for easier access
  const { successCode = 200, errorCode = 500, messageKey = 'message', dataKey = 'data' } = options;

  // Check if the response is an object and not null
  if (!_.isObject(response) || _.isNull(response)) {
    throw new Error('Invalid response: Response must be a non-null object.');
  }

  // Define the formatted response structure
  const formattedResponse = {
    [messageKey]: '',
    [dataKey]: null,
    status: null,
    error: null,
  };

  // Check if the response contains an error
  if (response.error) {
    // Set the error details
    formattedResponse.error = response.error;
    formattedResponse.status = errorCode;
    formattedResponse[messageKey] = 'An error occurred while processing your request.';
  } else {
    // Set the success details
    formattedResponse.status = successCode;
    formattedResponse[messageKey] = 'Request processed successfully.';
    formattedResponse[dataKey] = response.data || null;
  }

  // Return the formatted response
  return formattedResponse;
}

// Export the function for use in other modules
module.exports = formatApiResponse;