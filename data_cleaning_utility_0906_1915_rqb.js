// 代码生成时间: 2025-09-06 19:15:39
// 引入lodash库
const _ = require('lodash');

/**
 * 数据清洗函数
 * 这个函数接受一个数组，清洗其中的每个元素
 * @param {Array} data - 需要清洗的数据数组
 * @returns {Array} 清洗后的数据数组
 */
function cleanData(data) {
  // 检查输入是否为数组
  if (!_.isArray(data)) {
    throw new Error('Input data should be an array.');
  }

  // 使用lodash的map方法遍历数组，对每个元素进行清洗
  return _.map(data, (item) => {
    // 检查item是否为对象
    if (_.isObject(item)) {
      // 移除对象中的空值
      return _.omitBy(item, _.isNil);
    } else {
      // 如果item不是对象，则返回原值
      return item;
    }
  });
}

/**
 * 示例数据
 */
const rawData = [
  { name: 'Alice', age: null },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: undefined },
  'non-object data',
  [1, 2, 3]
];

/**
 * 清洗数据并输出结果
 */
try {
  const cleanedData = cleanData(rawData);
  console.log('Cleaned Data:', cleanedData);
} catch (error) {
  console.error('Data cleaning error:', error.message);
}
