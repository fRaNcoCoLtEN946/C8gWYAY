// 代码生成时间: 2025-09-04 04:48:02
 * @author [Your Name]
 */

/**
 * Validates a form object using given rules.
 * @param {Object} formData - The form data to be validated.
 * @param {Object} rules - Validation rules for each form field.
 * @returns {Object} - An object containing the validation result and errors.
 */
function validateForm(formData, rules) {
  const errors = {};

  // Check if formData or rules are not provided
  if (!formData || !rules) {
    throw new Error('Form data and rules are required for validation.');
  }

  // Iterate over each rule and validate the corresponding form field
  _.forOwn(rules, (rule, field) => {
    // Check if the field exists in formData
    if (!_.has(formData, field)) {
      errors[field] = `Field '${field}' is missing.`;
      return;
    }

    // Validate each rule for the field
    const value = formData[field];
    if (_.isString(rule)) {
      // If rule is a string, it's considered a regex pattern
      if (!value.match(rule)) {
        errors[field] = `Field '${field}' does not match pattern '${rule}'`;
      }
    } else if (_.isFunction(rule)) {
      // If rule is a function, call it to validate
      if (!rule(value)) {
        errors[field] = `Field '${field}' validation failed.`;
      }
    }
  });

  // Return the result of the validation
  return { isValid: _.isEmpty(errors), errors };
}

// Example usage
try {
  const formData = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    age: '30'
  };

  const rules = {
    name: /^[a-zA-Z ]+$/, // Name should only contain letters and spaces
    email: /^[^@]+@[^@]+\.[^@]+$/, // Email should be a valid email address
    age: age => parseInt(age, 10) > 0 // Age should be a positive integer
  };

  const validationResult = validateForm(formData, rules);
  if (validationResult.isValid) {
    console.log('Form is valid!');
  } else {
    console.error('Form validation errors:', validationResult.errors);
  }
} catch (error) {
  console.error('Validation failed:', error.message);
}