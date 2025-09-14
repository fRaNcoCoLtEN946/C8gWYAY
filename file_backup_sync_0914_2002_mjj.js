// 代码生成时间: 2025-09-14 20:02:56
const fs = require('fs');
const path = require('path');
const _ = require('lodash');

// Function to recursively read files from a directory and return a list of file paths
const readDirectoryFiles = (dirPath) => {
    let files = [];
    const enumerateFiles = (dir) => {
        const entries = fs.readdirSync(dir, { withFileTypes: true });
        for (let entry of entries) {
            if (entry.isDirectory()) {
                enumerateFiles(path.join(dir, entry.name));
            } else {
                files.push(path.join(dir, entry.name));
            }
        }
    };
    enumerateFiles(dirPath);
    return files;
};

// Function to copy a file from source to destination
const copyFile = (sourcePath, destinationPath) => {
    fs.copyFileSync(sourcePath, destinationPath);
};

// Function to backup and sync files from source to destination
const backupAndSyncFiles = (sourceDir, destinationDir) => {
    // Ensure the destination directory exists
    if (!fs.existsSync(destinationDir)) {
        fs.mkdirSync(destinationDir, { recursive: true });
    }

    // Read files from the source directory
    const sourceFiles = readDirectoryFiles(sourceDir);

    // Copy each file from source to destination
    _.forEach(sourceFiles, (filePath) => {
        const relativePath = path.relative(sourceDir, filePath);
        const destinationPath = path.join(destinationDir, relativePath);

        try {
            copyFile(filePath, destinationPath);
            console.log(`File ${relativePath} has been backed up and synced.`);
        } catch (error) {
            console.error(`Error backing up and syncing file ${relativePath}: ${error.message}`);
        }
    });
};

// Usage
const sourceDirectory = './source'; // Replace with your source directory path
const destinationDirectory = './destination'; // Replace with your destination directory path

backupAndSyncFiles(sourceDirectory, destinationDirectory);