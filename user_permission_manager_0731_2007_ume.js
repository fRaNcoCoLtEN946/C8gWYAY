// 代码生成时间: 2025-07-31 20:07:21
// Import the lodash library
const _ = require('lodash');

class UserPermissionManager {
  // Constructor to initialize user permissions
  constructor() {
    this.permissions = {}; // Stores permissions in the form of { userId: ['permission1', 'permission2', ...] }
  }

  // Method to add a permission to a user
  addPermission(userId, permission) {
    if (!userId || !permission) {
      throw new Error('User ID and permission are required.');
    }
    if (!this.permissions[userId]) {
      this.permissions[userId] = [];
    }
    if (!_.includes(this.permissions[userId], permission)) {
      this.permissions[userId].push(permission);
    } else {
      throw new Error(`Permission '${permission}' already exists for user ID '${userId}'`);
    }
  }

  // Method to remove a permission from a user
  removePermission(userId, permission) {
    if (!userId || !permission) {
      throw new Error('User ID and permission are required.');
    }
    const userPermissions = this.permissions[userId];
    if (!userPermissions) {
      throw new Error(`No permissions found for user ID '${userId}'`);
    }
    _.pull(userPermissions, permission);
  }

  // Method to check if a user has a specific permission
  hasPermission(userId, permission) {
    if (!userId || !permission) {
      throw new Error('User ID and permission are required.');
    }
    const userPermissions = this.permissions[userId];
    if (!userPermissions) {
      return false;
    }
    return _.includes(userPermissions, permission);
  }

  // Method to retrieve all permissions for a user
  getPermissions(userId) {
    if (!userId) {
      throw new Error('User ID is required.');
    }
    return this.permissions[userId] || [];
  }
}

// Example usage
try {
  const userManager = new UserPermissionManager();
  userManager.addPermission('user123', 'read');
  userManager.addPermission('user123', 'write');
  console.log(userManager.hasPermission('user123', 'read')); // true
  console.log(userManager.getPermissions('user123')); // ['read', 'write']
  userManager.removePermission('user123', 'write');
  console.log(userManager.hasPermission('user123', 'write')); // false
} catch (error) {
  console.error(error.message);
}