// 代码生成时间: 2025-08-15 06:26:04
const _ = require('lodash'); // Require lodash

// Define the config manager class
class ConfigManager {
  constructor() {
    this.config = {}; // Initialize an empty config object
  }

  /**
   * Load configuration from a JSON file.
   * @param {string} filePath - The path to the configuration file.
   * @returns {Promise} - A promise that resolves when the config is loaded.
   */
  async loadConfig(filePath) {
    try {
      const data = await fs.promises.readFile(filePath, 'utf8'); // Read the file
      this.config = JSON.parse(data); // Parse the JSON data into the config object
    } catch (error) {
      throw new Error(`Failed to load config: ${error.message}`); // Handle errors
    }
  }

  /**
   * Get a value from the configuration.
   * @param {string} key - The key of the config value to get.
   * @returns {any} - The value associated with the key, or undefined if not found.
   */
  getConfig(key) {
    return _.get(this.config, key); // Use lodash get to safely retrieve the config value
  }

  /**
   * Set a value in the configuration.
   * @param {string} key - The key of the config value to set.
   * @param {any} value - The value to set.
   */
  setConfig(key, value) {
    _.set(this.config, key, value); // Use lodash set to safely set the config value
  }

  /**
   * Save the current configuration to a JSON file.
   * @param {string} filePath - The path to the file where the config should be saved.
   * @returns {Promise} - A promise that resolves when the config is saved.
   */
  async saveConfig(filePath) {
    try {
      const data = JSON.stringify(this.config, null, 2); // Stringify the config object
      await fs.promises.writeFile(filePath, data); // Write the config to the file
    } catch (error) {
      throw new Error(`Failed to save config: ${error.message}`); // Handle errors
    }
  }
}

// Export the ConfigManager class
module.exports = ConfigManager;