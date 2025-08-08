// 代码生成时间: 2025-08-09 04:36:03
const _ = require('lodash');

// Define possible roles
const ROLES = {
  ADMIN: 'admin',
  USER: 'user',
  GUEST: 'guest'
};

// Define access levels for different actions
const AccessLevels = {
  READ: 'read',
  WRITE: 'write',
  DELETE: 'delete'
};

// Access control rules
const accessControlRules = {
  [AccessLevels.READ]: {
    [ROLES.ADMIN]: true,
    [ROLES.USER]: true,
    [ROLES.GUEST]: true
  },
  [AccessLevels.WRITE]: {
    [ROLES.ADMIN]: true,
    [ROLES.USER]: false,
    [ROLES.GUEST]: false
  },
  [AccessLevels.DELETE]: {
    [ROLES.ADMIN]: true,
    [ROLES.USER]: false,
    [ROLES.GUEST]: false
  }
};

/**
 * Checks if a user has the required access level for an action.
 * @param {string} action - The action to check access for (e.g., 'read', 'write', 'delete').
 * @param {string} role - The user's role (e.g., 'admin', 'user', 'guest').
 * @returns {boolean} - Whether the user has access to perform the action.
 */
function hasAccess(action, role) {
  // Check if action and role are valid
  if (!_.includes(_.keys(AccessLevels), action) || !_.includes(_.values(ROLES), role)) {
    throw new Error('Invalid action or role');
  }

  // Check if user has access based on the access control rules
  return accessControlRules[action][role];
}

// Example usage
try {
  const userRole = ROLES.USER;
  const action = AccessLevels.READ;

  if (hasAccess(action, userRole)) {
    console.log(`Access granted for ${action} action.`);
  } else {
    console.log(`Access denied for ${action} action.`);
  }
} catch (error) {
  console.error('Error:', error.message);
}