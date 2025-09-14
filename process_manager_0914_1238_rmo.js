// 代码生成时间: 2025-09-14 12:38:07
const _ = require('lodash'); // Import Lodash library

/**
 * ProcessManager class
 * Handles process-related operations
 */
class ProcessManager {
  constructor() {
    this.processes = []; // Array to store process information
  }

  /**
   * Add a new process to the manager
   *
   * @param {Object} processObj - The process object containing id and command
   *
   * @returns {string} - Success message
   */
  addProcess(processObj) {
    if (!_.isObject(processObj) || _.isEmpty(processObj.id) || _.isEmpty(processObj.command)) {
      throw new Error('Invalid process object. Must contain id and command.');
    }

    this.processes.push({
      ...processObj,
      status: 'running', // Default status
      startTime: new Date().toISOString()
    });

    return `Process ${processObj.id} added successfully.`;
  }

  /**
   * Get a list of all processes
   *
   * @returns {Array} - List of all processes
   */
  getAllProcesses() {
    return this.processes;
  }

  /**
   * Get a specific process by id
   *
   * @param {string} id - The process id
   *
   * @returns {Object|null} - The process object or null if not found
   */
  getProcessById(id) {
    return this.processes.find(process => process.id === id) || null;
  }

  /**
   * Update the status of a specific process
   *
   * @param {string} id - The process id
   * @param {string} status - The new status
   *
   * @returns {string} - Success message or error message
   */
  updateProcessStatus(id, status) {
    const process = this.getProcessById(id);
    if (!process) {
      throw new Error(`Process with id ${id} not found.`);
    }

    process.status = status;
    process.endTime = new Date().toISOString();

    return `Process ${id} status updated to ${status}.`;
  }
}

module.exports = ProcessManager; // Export the ProcessManager class