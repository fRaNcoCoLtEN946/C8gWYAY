// 代码生成时间: 2025-08-27 03:13:49
// Required modules
const mysql = require('mysql');
const _ = require('lodash');

// MySQL connection configuration
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'your_username',
  password : 'your_password',
  database : 'your_database'
});

// Connect to MySQL database
connection.connect(error => {
  if (error) throw error;
  console.log('Successfully connected to the database.');
});

/**
 * Function to prevent SQL injection by using parameterized queries.
 * @param {string} username - The username to search for.
 * @param {function} callback - The callback function to handle the results.
 */
function getUserByUsername(username, callback) {
  // Use Lodash to escape user input to prevent SQL injection
  const safeUsername = _.escape(username);

  // Construct a parameterized query to prevent SQL injection
  const query = 'SELECT * FROM users WHERE username = ?';

  // Execute the query with the safe input
  connection.query(query, [safeUsername], (error, results) => {
    if (error) {
      // Handle error
      console.error('Error querying database:', error);
      callback(error, null);
    } else {
      // Handle results
      callback(null, results);
    }
  });
}

/**
 * Example usage of the function to prevent SQL injection.
 */
getUserByUsername('unsafe_input', (error, user) => {
  if (error) {
    console.error('Failed to retrieve user:', error);
  } else {
    console.log('User retrieved:', user);
  }
});