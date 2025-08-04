// 代码生成时间: 2025-08-04 15:24:54
 * @returns {boolean} - Returns true if credentials are valid, false otherwise
 */
function validateCredentials(credentials) {
  // Check if credentials object is valid
  if (!credentials || typeof credentials !== 'object') {
    throw new Error('Invalid credentials object');
  }

  // Check if username and password are provided
  if (!credentials.username || !credentials.password) {
    throw new Error('Username and password are required');
  }

  // Define valid credentials for demonstration purposes
  const validUsername = 'admin';
  const validPassword = 'password123';

  // Use Lodash to compare username and password
  return _.isEqual(credentials.username, validUsername) && _.isEqual(credentials.password, validPassword);
}

/**
 * Function to handle user login
 * @param {Object} credentials - Object containing username and password
 * @returns {Promise} - Resolves if login is successful, rejects otherwise
 */
function handleLogin(credentials) {
  return new Promise((resolve, reject) => {
    try {
      // Validate user credentials
      const isValid = validateCredentials(credentials);

      if (isValid) {
        // Login successful
        resolve('Login successful');
      } else {
        // Login failed
        reject(new Error('Invalid username or password'));
      }
    } catch (error) {
      // Handle any errors during validation
      reject(error);
    }
  });
}

// Example usage
const credentials = { username: 'admin', password: 'password123' };
handleLogin(credentials)
  .then((successMessage) => {
    console.log(successMessage);
  })
  .catch((error) => {
    console.error(error.message);
  });