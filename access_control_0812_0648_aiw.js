// 代码生成时间: 2025-08-12 06:48:15
const _ = require('lodash');

/**
 * AccessControl class
 *
 * Manages user permissions based on roles.
 */
class AccessControl {
  constructor() {
    this.permissions = {
      admin: ['read', 'write', 'delete'],
      user: ['read'],
      guest: []
    };
  }

  /**
   * Checks if a user has access to a specific action.
   *
   * @param {string} role - The role of the user.
   * @param {string} action - The action to check for permission.
   * @returns {boolean} - Whether the user has access to the action.
   */
  hasAccess(role, action) {
    const userPermissions = this.permissions[role] || [];
    return _.includes(userPermissions, action);
  }

  /**
   * Updates the permissions for a specific role.
   *
   * @param {string} role - The role to update.
   * @param {string[]} actions - The new permissions list.
   * @returns {void}
   */
  updatePermissions(role, actions) {
    if (!_.has(this.permissions, role)) {
      throw new Error('Role does not exist');
    }
    this.permissions[role] = actions;
  }
}

// Usage
const ac = new AccessControl();

try {
  console.log(ac.hasAccess('admin', 'read')); // true
  console.log(ac.hasAccess('user', 'delete')); // false
  console.log(ac.hasAccess('guest', 'write')); // false

  // Update permissions for a role
  ac.updatePermissions('user', ['read', 'write']);
  console.log(ac.hasAccess('user', 'write')); // true
} catch (error) {
  console.error(error.message);
}
