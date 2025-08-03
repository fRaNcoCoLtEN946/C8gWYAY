// 代码生成时间: 2025-08-03 10:10:31
// Importing Lodash
const _ = require('lodash');

class DataModel {

  /**
   * Constructor for DataModel
   * @param {object} data - The initial data object.
   */
  constructor(data) {
    this.data = data;
  }

  /**
   * Creates a new data entry.
   * @param {object} newData - The new data to be added.
   * @returns {object} - The newly created data entry.
   */
  createEntry(newData) {
    try {
      this.data = _.merge(this.data, newData);
      return this.data;
    } catch (error) {
      console.error('Error creating entry:', error);
      throw error;
    }
  }

  /**
   * Reads a data entry by its key.
   * @param {string} key - The key of the data entry to retrieve.
   * @returns {object|null} - The data entry if found, otherwise null.
   */
  readEntry(key) {
    try {
      return _.get(this.data, key, null);
    } catch (error) {
      console.error('Error reading entry:', error);
      throw error;
    }
  }

  /**
   * Updates an existing data entry.
   * @param {string} key - The key of the data entry to update.
   * @param {object} updateData - The data to update the entry with.
   * @returns {object|null} - The updated data entry if successful, otherwise null.
   */
  updateEntry(key, updateData) {
    try {
      if (!this.data[key]) return null;
      this.data[key] = _.merge(this.data[key], updateData);
      return this.data[key];
    } catch (error) {
      console.error('Error updating entry:', error);
      throw error;
    }
  }

  /**
   * Deletes a data entry by its key.
   * @param {string} key - The key of the data entry to delete.
   * @returns {boolean} - True if the deletion was successful, otherwise false.
   */
  deleteEntry(key) {
    try {
      if (!_.has(this.data, key)) return false;
      delete this.data[key];
      return true;
    } catch (error) {
      console.error('Error deleting entry:', error);
      throw error;
    }
  }

  /**
   * Gets all data entries.
   * @returns {object} - The complete data object.
   */
  getAllEntries() {
    return this.data;
  }
}

// Example usage:
/*
const model = new DataModel({
  user1: { name: 'John', age: 30 },
  user2: { name: 'Jane', age: 25 }
});

console.log(model.createEntry({ user3: { name: 'Doe', age: 40 } }));
console.log(model.readEntry('user1'));
console.log(model.updateEntry('user2', { age: 26 }));
console.log(model.deleteEntry('user1'));
console.log(model.getAllEntries());
*/
