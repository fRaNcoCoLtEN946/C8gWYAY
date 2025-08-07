// 代码生成时间: 2025-08-08 01:47:49
const _ = require('lodash');

/**
 * Excel表格自动生成器
 * @param {Object} options - 配置选项
 * @param {Array} options.rows - 表格行
 * @param {Array} options.cols - 表格列
 * @param {string} options.title - 表格标题
 * @returns {string} - 生成的Excel表格数据
 */
function generateExcel(options) {
  // 检查输入参数
  if (!_.isObject(options) || !_.isArray(options.rows) || !_.isArray(options.cols) || !_.isString(options.title)) {
    throw new Error('Invalid options provided');
  }

  const { rows, cols, title } = options;
  const excelData = [];

  // 添加标题行
  excelData.push([title]);

  // 添加列名行
  excelData.push(cols.map(col => ({ header: col, key: col })));

  // 添加数据行
  rows.forEach((row) => {
    const rowData = cols.map(col => row[col] || '');
    excelData.push(rowData);
  });

  return excelData;
}

// 示例使用
try {
  const options = {
    title: 'Example Excel',
    rows: [
      { col1: 'Data 1', col2: 'Data 2', col3: 'Data 3' },
      { col1: 'Data 4', col2: 'Data 5', col3: 'Data 6' }
    ],
    cols: ['col1', 'col2', 'col3']
  };

  const excel = generateExcel(options);
  console.log(JSON.stringify(excel, null, 2));
} catch (error) {
  console.error(error.message);
}