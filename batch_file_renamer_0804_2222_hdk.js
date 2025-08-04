// 代码生成时间: 2025-08-04 22:22:27
const fs = require('fs');
const path = require('path');
const _ = require('lodash');

/**
 * Renames files in a directory based on a given pattern and replacement.
 * 
 * @param {string} directoryPath - The path to the directory containing the files to rename.
 * @param {RegExp} pattern - The pattern to match in the file names.
 * @param {string} replacement - The string to replace the matched pattern.
 * @returns {Promise<void>} - A promise that resolves when all files have been renamed.
 */
function renameFilesInDirectory(directoryPath, pattern, replacement) {
    return new Promise((resolve, reject) => {
        fs.readdir(directoryPath, (err, files) => {
            if (err) {
                reject(`Error reading directory: ${err.message}`);
                return;
            }

            let renamePromises = files.map(file => {
                const fullPath = path.join(directoryPath, file);
                return new Promise((resolve, reject) => {
                    fs.stat(fullPath, (err, stats) => {
                        if (err) {
                            reject(`Error reading file stats: ${err.message}`);
                            return;
                        }
                        if (stats.isDirectory()) {
                            resolve(); // Skip directories
                            return;
                        }

                        const newFileName = _.replace(file, pattern, replacement);
                        const newFullPath = path.join(directoryPath, newFileName);

                        fs.rename(fullPath, newFullPath, err => {
                            if (err) {
                                reject(`Error renaming file: ${err.message}`);
                            } else {
                                console.log(`Renamed '${file}' to '${newFileName}'`);
                                resolve();
                            }
                        });
                    });
                });
            });

            Promise.all(renamePromises)
                .then(resolve)
                .catch(reject);
        });
    });
}

/**
 * Main function to run the batch file renamer tool.
 */
function main() {
    const directoryPath = './path/to/your/directory'; // Replace with your directory path
    const pattern = /oldPattern/g; // Replace with your pattern
    const replacement = 'newPattern'; // Replace with your replacement

    renameFilesInDirectory(directoryPath, pattern, replacement)
        .then(() => {
            console.log('All files have been renamed successfully.');
        })
        .catch(err => {
            console.error('Error renaming files:', err);
        });
}

// Run the main function
main();