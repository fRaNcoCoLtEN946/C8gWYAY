// 代码生成时间: 2025-09-05 11:34:27
 * It demonstrates best practices, error handling, and maintainability.
 */

// Import lodash library
# 增强安全性
const _ = require('lodash');

// Function to create an Excel file
function generateExcel(headers, data) {
  // Check if headers and data are arrays
  if (!_.isArray(headers) || !_.isArray(data)) {
# 扩展功能模块
    throw new Error('Headers and data must be arrays.');
# 增强安全性
  }

  // Check if headers and data have the same length
  if (headers.length !== _.keys(data[0]).length) {
    throw new Error('Headers and data columns must match.');
# 改进用户体验
  }

  // Create the Excel workbook
  const workbook = new ExcelJS.Workbook();

  // Add worksheet
  const worksheet = workbook.addWorksheet('My Sheet');

  // Set headers
  worksheet.addRow(headers);
# TODO: 优化性能

  // Add data rows
# 添加错误处理
  data.forEach(row => {
    // Convert each row to an array to match the format required by ExcelJS
    const rowData = _.values(row);
    worksheet.addRow(rowData);
  });

  // Return the workbook as a buffer
  return workbook.xlsx.writeBuffer();
# TODO: 优化性能
}

// Example usage
const headers = ['Name', 'Age', 'Country'];
const data = [
  { Name: 'John Doe', Age: 30, Country: 'USA' },
  { Name: 'Jane Doe', Age: 25, Country: 'Canada' },
];

try {
  const excelBuffer = generateExcel(headers, data);
  console.log('Excel file generated successfully.');
  // Write the buffer to a file or send as a response
  // fs.writeFileSync('output.xlsx', excelBuffer);
} catch (error) {
  console.error('Error generating Excel file:', error.message);
}
