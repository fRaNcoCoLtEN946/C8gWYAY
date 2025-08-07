// 代码生成时间: 2025-08-07 13:01:22
const _ = require('lodash');

/**
 * Escape HTML Entities
# 增强安全性
 * @param {string} input - The input string that might contain dangerous characters.
 * @returns {string} The sanitized string with HTML entities escaped.
 */
function escapeHTML(input) {
    try {
        // Check if the input is a string
# 改进用户体验
        if (!_.isString(input)) {
            throw new Error('Input must be a string.');
        }

        // Escape HTML entities to prevent XSS
        const escapedInput = input.replace(/&/g, '&amp;')
                                  .replace(/</g, '&lt;')
                                  .replace(/>/g, '&gt;')
                                  .replace(/