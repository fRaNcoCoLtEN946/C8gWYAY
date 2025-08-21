// 代码生成时间: 2025-08-22 03:01:27
// Import required modules
const _ = require('lodash');
const { Pool } = require('pg');

// Configuration for source and target databases
const sourceConfig = {
  host: 'source_host',
  port: 5432,
  user: 'source_user',
  password: 'source_password',
  database: 'source_database'
};

const targetConfig = {
  host: 'target_host',
  port: 5432,
  user: 'target_user',
  password: 'target_password',
  database: 'target_database'
};

// Create a pool for the source database
const sourcePool = new Pool(sourceConfig);

// Create a pool for the target database
const targetPool = new Pool(targetConfig);

// Function to migrate data from source to target database
async function migrateData() {
  try {
    // Connect to source database
    const sourceClient = await sourcePool.connect();

    // Connect to target database
    const targetClient = await targetPool.connect();

    // Query to select data from source database
    const selectQuery = 'SELECT * FROM your_table';

    // Query to insert data into target database
    const insertQuery = 'INSERT INTO target_table (column1, column2) VALUES ($1, $2)';

    // Execute select query on source database
    const { rows } = await sourceClient.query(selectQuery);

    // Migrate data row by row
    for (const row of rows) {
      await targetClient.query(insertQuery, ['value1', 'value2']);
    }

    // Release clients
    await sourceClient.release();
    await targetClient.release();

    console.log('Data migration completed successfully.');
  } catch (error) {
    console.error('Error occurred during data migration:', error.message);
  }
}

// Run the data migration
migrateData();