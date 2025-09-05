// 代码生成时间: 2025-09-05 17:59:56
// Import lodash to use its utilities
const _ = require('lodash');

// Define roles with their corresponding permissions
const rolesPermissions = {
  admin: ['create', 'read', 'update', 'delete'],
  user: ['read'],
  guest: []
};

// Define a function to check if a user has a specific permission
function hasPermission(userRole, permission) {
  // Check if the permission exists for the given role
  if (!_.includes(rolesPermissions[userRole], permission)) {
    throw new Error(`Permission '${permission}' not allowed for role '${userRole}'`);
  }
  return true;
}

// Define an access control function that uses the hasPermission function
function accessControl(userRole, requiredPermissions) {
  // Check if all required permissions are available for the user role
  _.forEach(requiredPermissions, (permission) => {
    if (!hasPermission(userRole, permission)) {
      throw new Error(`User role '${userRole}' does not have the required permission '${permission}'`);
    }
  });
  // If all checks pass, grant access
  return true;
}

// Example usage
try {
  const userRole = 'admin';
  const requiredPermissions = ['create', 'delete'];
  
  if (accessControl(userRole, requiredPermissions)) {
    console.log('Access granted');
  } else {
    console.log('Access denied');
  }
} catch (error) {
  console.error('Access control error:', error.message);
}
