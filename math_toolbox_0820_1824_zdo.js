// 代码生成时间: 2025-08-20 18:24:42
// math_toolbox.js
// A collection of mathematical functions using JS and Lodash

// Define a math toolbox object
const mathToolbox = {

  // Function to add two numbers
  add: function(a, b) {
    // Check for invalid inputs
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Both arguments must be numbers.');
    }

    return a + b;
  },

  // Function to subtract two numbers
  subtract: function(a, b) {
    // Check for invalid inputs
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Both arguments must be numbers.');
    }

    return a - b;
  },

  // Function to multiply two numbers
  multiply: function(a, b) {
    // Check for invalid inputs
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Both arguments must be numbers.');
    }

    return a * b;
  },

  // Function to divide two numbers with error handling for division by zero
  divide: function(a, b) {
    // Check for invalid inputs
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Both arguments must be numbers.');
    }

    if (b === 0) {
      throw new Error('Cannot divide by zero.');
    }

    return a / b;
  },

  // Function to calculate the factorial of a number
  factorial: function(n) {
    // Check for invalid inputs
    if (!Number.isInteger(n) || n < 0) {
      throw new Error('Input must be a non-negative integer.');
    }

    // Calculate factorial using Lodash's reduce function
    return _.reduce(
      _.range(1, n + 1),
      (product, i) => product * i,
      1
    );
  },

  // Function to calculate the greatest common divisor (GCD) of two numbers
  gcd: function(a, b) {
    // Check for invalid inputs
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
      throw new Error('Both arguments must be integers.');
    }

    while (b !== 0) {
      let temp = a % b;
      a = b;
      b = temp;
    }
    return Math.abs(a);
  },

  // Function to calculate the least common multiple (LCM) of two numbers
  lcm: function(a, b) {
    // Check for invalid inputs
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
      throw new Error('Both arguments must be integers.');
    }

    return Math.abs(a * b) / this.gcd(a, b);
  }

};

// Export the math toolbox object for use in other modules
module.exports = mathToolbox;
