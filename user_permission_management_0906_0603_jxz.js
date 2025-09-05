// 代码生成时间: 2025-09-06 06:03:18
const _ = require('lodash');

// Define the user roles and their corresponding permissions
const userRoles = {
  admin: ['create', 'read', 'update', 'delete'],
  editor: ['read', 'update'],
  user: ['read']
};

// Define a user object with role and permissions
let user = {
  role: 'user',
  permissions: []
};

/**
 * Assigns permissions to a user based on their role
 * @param {string} role - The user's role
 */
function assignPermissions(role) {
  if (!userRoles[role]) {
    throw new Error('Invalid role');
  }
  user.role = role;
  user.permissions = _.cloneDeep(userRoles[role]);
}

/**
 * Checks if the user has a specific permission
 * @param {string} permission - The permission to check for
 * @returns {boolean} - Whether the user has the permission
 */
function hasPermission(permission) {
  return _.includes(user.permissions, permission);
}

// Example usage:
try {
  assignPermissions('admin'); // Assign admin role to user
  console.log(hasPermission('delete')); // Should log true
  assignPermissions('editor'); // Change user role to editor
  console.log(hasPermission('delete')); // Should log false
} catch (error) {
  console.error(error.message);
}

// Export the functions for use in other modules
module.exports = { assignPermissions, hasPermission };
