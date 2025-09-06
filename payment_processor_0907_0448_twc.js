// 代码生成时间: 2025-09-07 04:48:08
const _ = require('lodash');

/**
 * Process payment
 *
 * @param {object} paymentData - Payment information
 * @param {string} paymentData.orderId - Unique order identifier
 * @param {string} paymentData.customerId - Unique customer identifier
 * @param {number} paymentData.amount - Payment amount
 * @param {string} paymentData.currency - Payment currency
 * @param {object} callback - Callback function to handle async operations
 * @returns {object} - Result of the payment processing
 */
function processPayment(paymentData, callback) {
  // Check if required properties exist
  if (!_.has(paymentData, 'orderId') || !_.has(paymentData, 'customerId') || !_.has(paymentData, 'amount') || !_.has(paymentData, 'currency')) {
    return callback({
      error: 'Invalid payment data',
      message: 'Missing required payment information'
    }, null);
  }

  // Validate payment amount
  if (!_.isNumber(paymentData.amount) || paymentData.amount <= 0) {
    return callback({
      error: 'Invalid amount',
      message: 'Payment amount must be a positive number'
    }, null);
  }

  // Simulate payment processing (replace with actual payment gateway logic)
  console.log(`Processing payment for order ${paymentData.orderId}...`);

  // Simulate async payment processing
  setTimeout(() => {
    const result = {
      status: 'success',
      message: 'Payment processed successfully',
      data: {
        orderId: paymentData.orderId,
        customerId: paymentData.customerId,
        amount: paymentData.amount,
        currency: paymentData.currency
      }
    };

    // Callback with result or error
    if (Math.random() < 0.2) { // Randomly fail the payment 20% of the time for testing purposes
      callback({
        error: 'Payment failed',
        message: 'Unable to process payment'
      }, null);
    } else {
      callback(null, result);
    }
  }, 1000);
}

// Usage example
const paymentData = {
  orderId: '123456789',
  customerId: '987654321',
  amount: 100.00,
  currency: 'USD'
};

processPayment(paymentData, (error, result) => {
  if (error) {
    console.error(`Error processing payment: ${error.message}`);
  } else {
    console.log('Payment result:', result);
  }
});