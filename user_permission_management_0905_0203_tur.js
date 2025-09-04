// 代码生成时间: 2025-09-05 02:03:01
const _ = require('lodash');

// Define a class to manage user permissions
class PermissionManager {
  // Constructor to initialize the permissions
  constructor() {
    this.permissions = {};
  }

  // Method to add permissions for a user
  addPermissions(userId, permissions) {
    if (!userId || !_.isArray(permissions)) {
      throw new Error('Invalid input for adding permissions');
    }

    // Ensure the user exists in the permissions object
    this.permissions[userId] = this.permissions[userId] || [];

    // Add permissions if not already present
    permissions.forEach(permission => {
      if (!this.permissions[userId].includes(permission)) {
        this.permissions[userId].push(permission);
      }
    });
  }

  // Method to remove permissions from a user
  removePermissions(userId, permissions) {
    if (!userId || !_.isArray(permissions)) {
      throw new Error('Invalid input for removing permissions');
    }

    // Check if the user exists in the permissions object
    if (!this.permissions[userId]) {
      throw new Error('User not found');
    }

    // Remove permissions if they exist
    permissions.forEach(permission => {
      const index = this.permissions[userId].indexOf(permission);
      if (index !== -1) {
        this.permissions[userId].splice(index, 1);
      }
    });
  }

  // Method to check if a user has a specific permission
  hasPermission(userId, permission) {
    if (!userId || !_.isString(permission)) {
      throw new Error('Invalid input for checking permission');
    }

    // Check if the user exists in the permissions object and has the permission
    return this.permissions[userId] ? this.permissions[userId].includes(permission) : false;
  }
}

// Example usage
const permissionManager = new PermissionManager();

// Add permissions for a user
try {
  permissionManager.addPermissions('user1', ['read', 'write']);
} catch (error) {
  console.error(error.message);
}

// Remove a permission from a user
try {
  permissionManager.removePermissions('user1', ['write']);
} catch (error) {
  console.error(error.message);
}

// Check if a user has a specific permission
try {
  const hasReadPermission = permissionManager.hasPermission('user1', 'read');
  console.log(`User has read permission: ${hasReadPermission}`);
} catch (error) {
  console.error(error.message);
}