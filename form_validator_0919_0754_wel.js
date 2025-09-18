// 代码生成时间: 2025-09-19 07:54:12
const _ = require('lodash');

// Define a simple validation rule structure
const validationRules = {
    // Example rule for 'email' field
    email: {
        required: true,
        pattern: /^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[\w-]{2,}$/i,
        message: 'Please enter a valid email address.'
    },
    // Example rule for 'password' field
    password: {
        required: true,
        minLength: 8,
        message: 'Password must be at least 8 characters long.'
    },
    // You can add more rules for different fields here
};

/**
 * Validates a form field against its rules
 *
 * @param {string} fieldName - The name of the field to validate
 * @param {string} value - The value of the field to validate
 * @param {object} rule - The validation rule for the field
 * @returns {boolean|string} - True if valid, error message if invalid
 */
function validateField(fieldName, value, rule) {
    if (rule.required && (value === undefined || value === '')) {
        return `The ${fieldName} field is required.`;
    }

    if (rule.pattern && !rule.pattern.test(value)) {
        return rule.message;
    }

    if (rule.minLength && value.length < rule.minLength) {
        return rule.message;
    }

    // Add more custom validation checks here

    return true;
}

/**
 * Validates the entire form data
 *
 * @param {object} formData - The form data to validate
 * @param {object} rules - The validation rules for the form
 * @returns {object} - An object containing validation results
 */
function validateForm(formData, rules) {
    const errors = {};
    const results = {};

    _.forEach(rules, (rule, fieldName) => {
        const isValid = validateField(fieldName, formData[fieldName], rule);
        if (isValid === true) {
            results[fieldName] = true;
        } else {
            errors[fieldName] = isValid;
        }
    });

    return {
        errors,
        isValid: Object.keys(errors).length === 0,
        data: results
    };
}

// Example usage
const formData = {
    email: 'user@example.com',
    password: 'password123'
};

const formRules = validationRules;

const validationResult = validateForm(formData, formRules);

if (validationResult.isValid) {
    console.log('Form is valid:', validationResult.data);
} else {
    console.error('Form validation errors:', validationResult.errors);
}
