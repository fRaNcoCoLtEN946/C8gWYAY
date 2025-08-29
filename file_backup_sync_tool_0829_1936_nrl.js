// 代码生成时间: 2025-08-29 19:36:18
const fs = require('fs');
const path = require('path');
const lodash = require('lodash');

// Configuration file path
const configFilePath = path.join(__dirname, 'config.json');

// Load configuration from JSON file
function loadConfig() {
    try {
        const configFile = fs.readFileSync(configFilePath, 'utf8');
        return JSON.parse(configFile);
    } catch (error) {
        console.error('Error loading configuration:', error);
        throw error;
    }
}

// Synchronize files from source to destination
function syncFiles(config) {
    const { sourceDir, destinationDir } = config;

    // Check if source directory exists
    if (!fs.existsSync(sourceDir)) {
        console.error(`Source directory ${sourceDir} does not exist.`);
        return;
    }

    // Create destination directory if it doesn't exist
    if (!fs.existsSync(destinationDir)) {
        fs.mkdirSync(destinationDir, { recursive: true });
    }

    // Read all files in source directory
    const files = fs.readdirSync(sourceDir);

    files.forEach(file => {
        const sourcePath = path.join(sourceDir, file);
        const destinationPath = path.join(destinationDir, file);

        // Check if it's a file (not a directory)
        if (fs.lstatSync(sourcePath).isFile()) {
            // Copy file to destination
            fs.copyFileSync(sourcePath, destinationPath);
            console.log(`Synced file: ${file}`);
        } else {
            console.warn(`Skipping directory: ${file}`);
        }
    });
}

// Main function to execute the backup and sync process
function main() {
    try {
        const config = loadConfig();
        syncFiles(config);
    } catch (error) {
        console.error('Backup and sync failed:', error);
    }
}

// Run the main function
main();