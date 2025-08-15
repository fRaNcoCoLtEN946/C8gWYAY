// 代码生成时间: 2025-08-15 13:36:32
'use strict';

// Import lodash for additional utility functions
const _ = require('lodash');

// Encryption and decryption utility
class PasswordUtils {
  // Configuration for encryption
  constructor(secretKey) {
    this.secretKey = secretKey;
  }

  /**
   * Encrypt a password
   *
   * @param {string} password - The password to be encrypted
   * @returns {string} - The encrypted password
   * @throws Error - If encryption fails
   */
  encryptPassword(password) {
    try {
      // Use a symmetric encryption library like crypto-js
      const CryptoJS = require('crypto-js');
      const encrypted = CryptoJS.AES.encrypt(password, this.secretKey).toString();
      return encrypted;
    } catch (error) {
      throw new Error('Encryption failed: ' + error.message);
    }
  }

  /**
   * Decrypt a password
   *
   * @param {string} encryptedPassword - The encrypted password to be decrypted
   * @returns {string} - The decrypted password
   * @throws Error - If decryption fails
   */
  decryptPassword(encryptedPassword) {
    try {
      // Use the same symmetric encryption library as in encryption
      const CryptoJS = require('crypto-js');
      const bytes = CryptoJS.AES.decrypt(encryptedPassword, this.secretKey);
      const decrypted = bytes.toString(CryptoJS.enc.Utf8);
      return decrypted;
    } catch (error) {
      throw new Error('Decryption failed: ' + error.message);
    }
  }
}

// Export the PasswordUtils class for external use
module.exports = PasswordUtils;