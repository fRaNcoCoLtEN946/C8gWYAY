// 代码生成时间: 2025-10-03 18:26:50
 * This tool provides a simple interface to unzip files.
 * It uses the JSZip library for unzipping and lodash for utility functions.
 *
 * @module UnzipTool
 */

const JSZip = require('jszip');
const fs = require('fs');
const path = require('path');

/**
 * Unzips a file to a specified destination.
 *
 * @param {string} zipFilePath - The path to the zip file to be unzipped.
 * @param {string} destinationPath - The path where the unzipped files will be stored.
 * @returns {Promise<void>} - A promise that resolves when the unzip operation is completed.
 */
function unzipFile(zipFilePath, destinationPath) {
  return new Promise((resolve, reject) => {
    fs.readFile(zipFilePath, (err, data) => {
      if (err) {
        reject(new Error(`Error reading zip file: ${err.message}`));
        return;
      }
      JSZip.loadAsync(data)
        .then((zip) => {
          // Loop through the files in the zip and extract them
          zip.forEach((relativePath, zipEntry) => {
            zipEntry.async('nodebuffer')
              .then((content) => {
                const destPath = path.join(destinationPath, relativePath);
                fs.writeFile(destPath, content, (err) => {
                  if (err) {
                    reject(new Error(`Error writing file: ${err.message}`));
                  }
                });
              })
              .catch((err) => {
                reject(new Error(`Error extracting file ${relativePath}: ${err.message}`));
              });
          });
          zip.forEach()
            .then(() => { resolve(); })
            .catch((err) => { reject(err); });
        })
        .catch((err) => {
          reject(new Error(`Error loading zip file: ${err.message}`));
        });
    });
  });
}

/**
 * Checks if a path is a directory.
 *
 * @param {string} path - The path to check.
 * @returns {Promise<boolean>} - A promise that resolves to true if the path is a directory, false otherwise.
 */
function isDirectory(path) {
  return new Promise((resolve, reject) => {
    fs.stat(path, (err, stats) => {
      if (err) {
        reject(err);
      } else {
        resolve(stats.isDirectory());
      }
    });
  });
}

/**
 * Main function to handle the unzip process.
 * It checks if the destination path exists and is a directory.
 *
 * @param {string} zipFilePath - The path to the zip file.
 * @param {string} destinationPath - The destination path where files will be extracted.
 */
async function handleUnzip(zipFilePath, destinationPath) {
  try {
    if (!await isDirectory(destinationPath)) {
      throw new Error(`Destination path ${destinationPath} is not a directory or does not exist`);
    }
    await unzipFile(zipFilePath, destinationPath);
    console.log('Unzip complete.');
  } catch (error) {
    console.error('Unzip failed:', error.message);
  }
}

// Example usage:
// handleUnzip('path/to/your/file.zip', 'path/to/destination/folder');