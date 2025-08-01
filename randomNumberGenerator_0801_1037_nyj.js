// 代码生成时间: 2025-08-01 10:37:27
// randomNumberGenerator.js
// 一个使用JS和LODASH框架实现的随机数生成器

/**
 * 生成指定范围内的随机数
 * @param {number} min - 最小值（包含）
 * @param {number} max - 最大值（不包含）
 * @returns {number} 随机数
 */
function generateRandomNumber(min, max) {
  // 验证输入参数
  if (typeof min !== 'number' || typeof max !== 'number') {
    throw new Error('Both min and max must be numbers.');
  }
  if (min >= max) {
    throw new Error('Max must be greater than min.');
  }

  // 使用lodash的random函数生成随机数
  return _.random(min, max);
}

// 示例用法
try {
  const randomNumber = generateRandomNumber(1, 100);
  console.log(`Generated random number: ${randomNumber}`);
} catch (error) {
  console.error('Error:', error.message);
}
