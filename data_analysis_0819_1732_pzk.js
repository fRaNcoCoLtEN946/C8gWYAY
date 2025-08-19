// 代码生成时间: 2025-08-19 17:32:28
// 引入lodash库
const _ = require('lodash');

/**
 * 计算平均值
 * @param {Array} arr - 数组
 * @returns {number} 平均值
 */
function calculateMean(arr) {
  if (!_.isArray(arr) || arr.length === 0) {
    throw new Error('输入必须是非空数组');
  }
  const sum = _.sum(arr);
  return sum / arr.length;
}

/**
 * 计算中位数
 * @param {Array} arr - 数组
 * @returns {number} 中位数
 */
function calculateMedian(arr) {
  if (!_.isArray(arr) || arr.length === 0) {
    throw new Error('输入必须是非空数组');
  }
  const sortedArr = _.sortBy(arr);
  const midIndex = Math.floor(sortedArr.length / 2);
  return sortedArr.length % 2 !== 0
    ? sortedArr[midIndex]
    : (sortedArr[midIndex] + sortedArr[midIndex - 1]) / 2;
}

/**
 * 计算最大值和最小值
 * @param {Array} arr - 数组
 * @returns {Object} {max, min} 最大值和最小值
 */
function calculateMaxMin(arr) {
  if (!_.isArray(arr) || arr.length === 0) {
    throw new Error('输入必须是非空数组');
  }
  return {
    max: _.max(arr),
    min: _.min(arr)
  };
}

/**
 * 计算方差
 * @param {Array} arr - 数组
 * @returns {number} 方差
 */
function calculateVariance(arr) {
  if (!_.isArray(arr) || arr.length === 0) {
    throw new Error('输入必须是非空数组');
  }
  const mean = calculateMean(arr);
  const variance = _.sumBy(arr, (n) => Math.pow(n - mean, 2)) / arr.length;
  return variance;
}

/**
 * 计算标准差
 * @param {Array} arr - 数组
 * @returns {number} 标准差
 */
function calculateStdDev(arr) {
  if (!_.isArray(arr) || arr.length === 0) {
    throw new Error('输入必须是非空数组');
  }
  const variance = calculateVariance(arr);
  return Math.sqrt(variance);
}

// 示例用法
const data = [1, 2, 3, 4, 5];

try {
  console.log('平均值:', calculateMean(data));
  console.log('中位数:', calculateMedian(data));
  console.log('最大值和最小值:', calculateMaxMin(data));
  console.log('方差:', calculateVariance(data));
  console.log('标准差:', calculateStdDev(data));
} catch (error) {
  console.error('错误:', error.message);
}