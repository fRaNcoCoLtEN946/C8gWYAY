// 代码生成时间: 2025-09-01 18:56:33
// 引入lodash库
const _ = require('lodash');

/**
 * 获取数据
 * @param {string} url - 数据来源URL
 * @returns {Promise<Array>} - 数据数组
 */
function fetchData(url) {
  return new Promise((resolve, reject) => {
    // 使用axios获取数据
    axios.get(url)
      .then(response => {
        // 解析数据
        const data = _.chain(response.data)
          .map(item => ({
            name: item.name,
            value: parseInt(item.value, 10)
          }))
          .compact() // 过滤空值
          .value();

        resolve(data);
      })
      .catch(error => {
        reject(error);
      });
  });
}

/**
 * 计算平均值
 * @param {Array} data - 数据数组
 * @returns {number} - 平均值
 */
function calculateAverage(data) {
  if (!_.isArray(data) || data.length === 0) {
    throw new Error('Invalid data');
  }

  return _.meanBy(data, 'value');
}

/**
 * 计算中位数
 * @param {Array} data - 数据数组
 * @returns {number} - 中位数
 */
function calculateMedian(data) {
  if (!_.isArray(data) || data.length === 0) {
    throw new Error('Invalid data');
  }

  return _.medianBy(data, 'value');
}

/**
 * 计算最大值
 * @param {Array} data - 数据数组
 * @returns {number} - 最大值
 */
function calculateMax(data) {
  if (!_.isArray(data) || data.length === 0) {
    throw new Error('Invalid data');
  }

  return _.maxBy(data, 'value').value;
}

/**
 * 计算最小值
 * @param {Array} data - 数据数组
 * @returns {number} - 最小值
 */
function calculateMin(data) {
  if (!_.isArray(data) || data.length === 0) {
    throw new Error('Invalid data');
  }

  return _.minBy(data, 'value').value;
}

/**
 * 主函数
 * @param {string} url - 数据来源URL
 */
async function main(url) {
  try {
    // 获取数据
    const data = await fetchData(url);

    // 计算统计指标
    const average = calculateAverage(data);
    const median = calculateMedian(data);
    const max = calculateMax(data);
    const min = calculateMin(data);

    // 输出结果
    console.log('Average:', average);
    console.log('Median:', median);
    console.log('Max:', max);
    console.log('Min:', min);
  } catch (error) {
    // 错误处理
    console.error('Error:', error.message);
  }
}

// 示例用法
const url = 'https://example.com/data.json';
main(url);