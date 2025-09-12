// 代码生成时间: 2025-09-12 14:19:46
const fs = require('fs');
const path = require('path');
const _ = require('lodash');
const AdmZip = require('adm-zip'); // 使用adm-zip库来处理压缩文件

/**
 * Class representing a file decompressor.
 */
class FileDecompressor {
  constructor() {
    // No initialization needed for now.
  }

  /**
   * Decompresses a ZIP file to the specified directory.
   *
   * @param {string} zipFilePath - The path to the ZIP file to decompress.
   * @param {string} outputDirectory - The path to the directory where files will be extracted.
   * @returns {Promise<void>} - A promise that resolves when the ZIP file has been decompressed.
   */
  static async decompressZip(zipFilePath, outputDirectory) {
    try {
      const zip = new AdmZip(zipFilePath);
      const entries = zip.getEntries();
      if (entries.length === 0) {
        throw new Error('The ZIP file is empty.');
      }

      // Ensure the output directory exists.
      await FileDecompressor.ensureDirectoryExists(outputDirectory);

      // Extract each entry to the specified directory.
      for (const entry of entries) {
        if (!entry.isDirectory) {
          const entryPath = path.join(outputDirectory, entry.entryName);
          zip.extractEntryTo(entry, entryPath, false, true);
        }
      }

      console.log('Decompression successful.');
    } catch (error) {
      console.error('Decompression failed:', error.message);
      throw error;
    }
  }

  /**
   * Ensures that the provided directory exists. If not, it will be created.
   *
   * @param {string} directoryPath - The path to the directory to ensure exists.
   * @returns {Promise<void>} - A promise that resolves when the directory exists.
   */
  static async ensureDirectoryExists(directoryPath) {
    try {
      await fs.promises.access(directoryPath);
    } catch (error) {
      if (error.code === 'ENOENT') {
        await fs.promises.mkdir(directoryPath, { recursive: true });
      } else {
        throw error;
      }
    }
  }
}

/**
 * Example usage:
 * Decompress a ZIP file located at 'path/to/file.zip' to 'path/to/output/directory'.
 *
 * FileDecompressor.decompressZip('path/to/file.zip', 'path/to/output/directory')
 *   .then(() => console.log('Files have been extracted.'))
 *   .catch((error) => console.error('Error:', error.message));
 */