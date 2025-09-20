// 代码生成时间: 2025-09-21 03:03:35
const fs = require('fs');
const path = require('path');
const _ = require('lodash');

/**
 * 检查文件夹是否存在，如果不存在则创建
 *
 * @param {string} dirPath - 文件夹路径
 */
function ensureDir(dirPath) {
    const exists = fs.existsSync(dirPath);
    if (!exists) {
        fs.mkdirSync(dirPath, { recursive: true });
    }
}

/**
 * 读取文件夹中的所有文件
 *
 * @param {string} dirPath - 文件夹路径
 * @returns {string[]} - 文件路径数组
 */
function readFiles(dirPath) {
    try {
        const files = fs.readdirSync(dirPath);
        return _.map(files, (file) => path.join(dirPath, file));
    } catch (error) {
        console.error('读取文件夹失败:', error);
        throw error;
    }
}

/**
 * 复制文件
 *
 * @param {string} source - 源文件路径
 * @param {string} target - 目标文件路径
 */
function copyFile(source, target) {
    try {
        const content = fs.readFileSync(source);
        fs.writeFileSync(target, content);
    } catch (error) {
        console.error('复制文件失败:', error);
        throw error;
    }
}

/**
 * 备份文件夹
 *
 * @param {string} sourceDir - 源文件夹路径
 * @param {string} backupDir - 备份文件夹路径
 */
function backupDir(sourceDir, backupDir) {
    ensureDir(backupDir);
    const files = readFiles(sourceDir);
    _.each(files, (file) => {
        const target = path.join(backupDir, path.relative(sourceDir, file));
        const targetDir = path.dirname(target);
        ensureDir(targetDir);
        copyFile(file, target);
    });
}

/**
 * 同步文件夹
 *
 * @param {string} sourceDir - 源文件夹路径
 * @param {string} targetDir - 目标文件夹路径
 */
function syncDir(sourceDir, targetDir) {
    ensureDir(targetDir);
    const sourceFiles = readFiles(sourceDir);
    const targetFiles = readFiles(targetDir);

    _.each(sourceFiles, (file) => {
        const target = path.join(targetDir, path.relative(sourceDir, file));
        const targetDir = path.dirname(target);
        ensureDir(targetDir);
        copyFile(file, target);
    });

    _.each(targetFiles, (file) => {
        const relativePath = path.relative(targetDir, file);
        if (!_.includes(_.map(sourceFiles, path.relative(sourceDir, sourceFiles)), relativePath)) {
            const source = path.join(sourceDir, relativePath);
            copyFile(file, source);
        }
    });
}

// 示例用法
const sourceDir = './source';
const backupDir = './backup';
const targetDir = './target';

backupDir(sourceDir, backupDir);
syncDir(sourceDir, targetDir);
