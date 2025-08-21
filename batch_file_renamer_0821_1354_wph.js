// 代码生成时间: 2025-08-21 13:54:59
const fs = require('fs');
const path = require('path');
const _ = require('lodash');

/**
 * 批量文件重命名工具
 * @param {string} sourceDir - 源目录路径
 * @param {Function} namingFunction - 重命名规则函数
 * @param {Function} errorCallback - 错误处理回调函数
 */
function batchRenameFiles(sourceDir, namingFunction, errorCallback) {
  fs.readdir(sourceDir, (err, files) => {
    if (err) {
      if (errorCallback) {
        errorCallback(err);
      } else {
        console.error('Failed to read directory:', err);
      }
      return;
    }

    files.forEach((file) => {
      const filePath = path.join(sourceDir, file);
      fs.stat(filePath, (err, stats) => {
        if (err) {
          if (errorCallback) {
            errorCallback(err);
          } else {
            console.error('Failed to get file stats:', err);
          }
          return;
        }

        if (stats.isFile()) {
          const newFileName = namingFunction(file);
          const newFilePath = path.join(sourceDir, newFileName);
          fs.rename(filePath, newFilePath, (err) => {
            if (err) {
              if (errorCallback) {
                errorCallback(err);
              } else {
                console.error('Failed to rename file:', err);
              }
              return;
            }
            console.log(`Renamed ${file} to ${newFileName}`);
          });
        }
      });
    });
  });
}

// 重命名规则示例：在文件名前添加前缀“new_”
function addPrefixNamingFunction(fileName) {
  return `new_${fileName}`;
}

// 示例：批量重命名指定目录下的所有文件
batchRenameFiles('path/to/your/directory', addPrefixNamingFunction, (error) => {
  console.error('An error occurred:', error);
});
