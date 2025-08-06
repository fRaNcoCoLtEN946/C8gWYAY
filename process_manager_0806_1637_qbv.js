// 代码生成时间: 2025-08-06 16:37:22
 * This module manages and interacts with system processes using Node.js and Lodash.
 * It provides functions to list, start, stop, and restart processes.
 *
 * @module process_manager
 */

const fs = require('fs');
const os = require('os');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

// Lodash is required for utility functions
const _ = require('lodash');

/**
 * Lists all running processes on the system.
 * @returns {Promise<Array>} A promise that resolves with an array of process details.
 */
async function listProcesses() {
  try {
    // Execute 'ps' command to list all processes
    const { stdout } = await exec('ps -eo pid,ppid,user,command');
    return stdout.trim().split('
');
  } catch (error) {
    console.error('Failed to list processes:', error);
    throw error;
  }
}

/**
 * Starts a new process with the given command.
 * @param {string} command - The command to execute.
 * @returns {Promise<string>} A promise that resolves with the process ID.
 */
async function startProcess(command) {
  try {
    const { stdout } = await exec(`pgrep ${command}`);
    const existingPid = stdout.trim();
    if (existingPid) {
      throw new Error(`Process with command ${command} is already running with PID ${existingPid}`);
    }
    const { stdout: newPid } = await exec(`nohup ${command} & echo $!`);
    return newPid.trim();
  } catch (error) {
    console.error('Failed to start process:', error);
    throw error;
  }
}

/**
 * Stops a process with the given PID.
 * @param {string} pid - The process ID to stop.
 * @returns {Promise<void>} A promise that resolves when the process is stopped.
 */
async function stopProcess(pid) {
  try {
    await exec(`kill ${pid}`);
  } catch (error) {
    console.error('Failed to stop process:', error);
    throw error;
  }
}

/**
 * Restarts a process by stopping it and then starting it again.
 * @param {string} command - The command to restart.
 * @returns {Promise<string>} A promise that resolves with the new process ID.
 */
async function restartProcess(command) {
  try {
    const { stdout } = await exec(`pgrep ${command}`);
    const existingPid = stdout.trim();
    if (existingPid) {
      await stopProcess(existingPid);
    }
    return startProcess(command);
  } catch (error) {
    console.error('Failed to restart process:', error);
    throw error;
  }
}

// Export the module
module.exports = {
  listProcesses,
  startProcess,
  stopProcess,
  restartProcess
};