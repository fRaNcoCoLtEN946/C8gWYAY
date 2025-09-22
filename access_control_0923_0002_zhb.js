// 代码生成时间: 2025-09-23 00:02:01
// Define lodash alias for easier access to lodash methods
const _ = require('lodash');

/**
 * User model representing a user with attributes and roles.
 * @typedef {Object} User
 * @property {string} id - Unique identifier for the user.
 * @property {string} name - Name of the user.
 * @property {string[]} roles - Array of roles assigned to the user.
 */

/**
 * Permission model representing an action that can be performed.
 * @typedef {Object} Permission
 * @property {string} action - Name of the action.
 * @property {string[]} rolesAllowed - Array of roles allowed to perform the action.
 */

/**
 * AccessControl class to handle permissions.
 */
class AccessControl {
  /**
   * Creates an instance of AccessControl.
   * @param {Permission[]} permissions - Array of permissions to check against.
   */
  constructor(permissions) {
    this.permissions = permissions;
  }

  /**
   * Checks if the user has the permission to perform the given action.
   * @param {User} user - The user to check permissions for.
   * @param {string} action - The action to check for.
   * @returns {boolean} True if the user has permission, false otherwise.
   */
  canPerformAction(user, action) {
    try {
      // Find the permission object for the given action
      const permission = _.find(this.permissions, { action });
      if (!permission) {
        throw new Error(`No permission found for action: ${action}`);
      }

      // Check if the user's roles are allowed to perform the action
      return _.some(permission.rolesAllowed, (role) => user.roles.includes(role));
    } catch (error) {
      console.error('Error checking permission:', error.message);
      return false;
    }
  }
}

// Example usage
const permissions = [
  {
    action: 'editPost',
    rolesAllowed: ['admin', 'editor']
  },
  {
    action: 'deletePost',
    rolesAllowed: ['admin']
  }
];

const user = {
  id: '1',
  name: 'John Doe',
  roles: ['user']
};

const adminUser = {
  id: '2',
  name: 'Jane Doe',
  roles: ['admin']
};

const accessControl = new AccessControl(permissions);

console.log(accessControl.canPerformAction(user, 'editPost')); // false
console.log(accessControl.canPerformAction(adminUser, 'deletePost')); // true