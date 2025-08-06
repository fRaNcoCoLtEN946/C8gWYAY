// 代码生成时间: 2025-08-07 00:11:54
 * Features:
 * - Retrieves CPU, memory, and disk usage.
 * - Provides error handling for failed operations.
 * - Includes comments and documentation for clarity and maintainability.
 */

// Required modules
const os = require('os');
const lodash = require('lodash');

// Function to retrieve CPU usage
function getCpuUsage() {
  try {
    // Lodash is not needed for CPU usage, but included for potential future use
    const cpuUsage = os.cpus().map(cpu => cpu.times).reduce((cpuTimes, currentCpu) => {
      return {
        user: cpuTimes.user + currentCpu.user,
        nice: cpuTimes.nice + currentCpu.nice,
        sys: cpuTimes.sys + currentCpu.sys,
        idle: cpuTimes.idle + currentCpu.idle,
        irq: cpuTimes.irq + currentCpu.irq
      };
    }, { user: 0, nice: 0, sys: 0, idle: 0, irq: 0 });
    
    return cpuUsage;
  } catch (error) {
    console.error('Failed to get CPU usage:', error);
    throw error;
  }
}

// Function to retrieve memory usage
function getMemoryUsage() {
  try {
    // Lodash is not needed for memory usage, but included for potential future use
    const memoryUsage = os.totalmem() - os.freemem();
    const memoryPercentage = (memoryUsage / os.totalmem()) * 100;
    return { memoryUsage, memoryPercentage };
  } catch (error) {
    console.error('Failed to get memory usage:', error);
    throw error;
  }
}

// Function to retrieve disk usage
function getDiskUsage() {
  try {
    // Lodash is not needed for disk usage, but included for potential future use
    const diskUsage = os.drives().map(drive => {
      return {
        driveName: drive.name,
        totalSize: drive.size,
        usedSize: drive.size - drive.available,
        availableSize: drive.available
      };
    });
    return diskUsage;
  } catch (error) {
    console.error('Failed to get disk usage:', error);
    throw error;
  }
}

// Function to monitor system performance
function monitorSystemPerformance() {
  try {
    // Retrieve system performance metrics
    const cpu = getCpuUsage();
    const memory = getMemoryUsage();
    const disk = getDiskUsage();

    // Log the performance metrics
    console.log('CPU Usage:', cpu);
    console.log('Memory Usage:', memory);
    console.log('Disk Usage:', disk);
  } catch (error) {
    console.error('Error monitoring system performance:', error);
  }
}

// Run the system performance monitor tool
monitorSystemPerformance();
