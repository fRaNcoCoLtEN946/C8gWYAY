// 代码生成时间: 2025-08-22 21:37:25
const _ = require('lodash');

/**
 * Analyzes memory usage and provides insights.
 * @class MemoryAnalyzer
 */
class MemoryAnalyzer {

    /**
     * Creates an instance of MemoryAnalyzer.
     * @param {object[]} data - The array of objects containing memory usage data.
     */
    constructor(data) {
        this.data = data;
    }

    /**
     * Calculates the total memory used.
     * @returns {number} - The total memory used in bytes.
     */
    calculateTotalMemory() {
        try {
            return _.sumBy(this.data, 'memoryUsed');
        } catch (error) {
            console.error('Error calculating total memory:', error);
            throw error;
        }
    }

    /**
     * Calculates the average memory used.
     * @returns {number} - The average memory used in bytes.
     */
    calculateAverageMemory() {
        try {
            return _.meanBy(this.data, 'memoryUsed');
        } catch (error) {
            console.error('Error calculating average memory:', error);
            throw error;
        }
    }

    /**
     * Finds the maximum memory used.
     * @returns {number} - The maximum memory used in bytes.
     */
    findMaxMemoryUsage() {
        try {
            return _.maxBy(this.data, 'memoryUsed').memoryUsed;
        } catch (error) {
            console.error('Error finding maximum memory usage:', error);
            throw error;
        }
    }

    /**
     * Finds the minimum memory used.
     * @returns {number} - The minimum memory used in bytes.
     */
    findMinMemoryUsage() {
        try {
            return _.minBy(this.data, 'memoryUsed').memoryUsed;
        } catch (error) {
            console.error('Error finding minimum memory usage:', error);
            throw error;
        }
    }
}

/**
 * Example usage:
 * const memoryData = [
 *     { process: 'Process A', memoryUsed: 1024 },
 *     { process: 'Process B', memoryUsed: 2048 },
 *     { process: 'Process C', memoryUsed: 512 },
 * ];
 * const analyzer = new MemoryAnalyzer(memoryData);
 * console.log('Total Memory Used:', analyzer.calculateTotalMemory());
 * console.log('Average Memory Used:', analyzer.calculateAverageMemory());
 * console.log('Maximum Memory Used:', analyzer.findMaxMemoryUsage());
 * console.log('Minimum Memory Used:', analyzer.findMinMemoryUsage());
 */
