// 代码生成时间: 2025-09-22 15:33:46
 * Features:
 * - Clear structure and easy to understand.
 * - Proper error handling.
 * - Comments and documentation included.
 * - Adheres to JavaScript best practices.
 * - Maintainability and extensibility ensured.
 */

const express = require('express');
const _ = require('lodash');

// Initialize the Express application
const app = express();
const port = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Sample data to mimic a database
const users = [{
  id: 1,
  name: 'John Doe',
  email: 'john@example.com',
}, {
  id: 2,
  name: 'Jane Doe',
  email: 'jane@example.com',
}];

// Helper function to find a user by ID
const findUserById = (id) => _.find(users, { id: parseInt(id) });

// GET /users - Retrieve a list of users
app.get('/users', (req, res) => {
  res.status(200).json(users);
});

// GET /users/:id - Retrieve a single user by ID
app.get('/users/:id', (req, res) => {
  const user = findUserById(req.params.id);
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// POST /users - Create a new user
app.post('/users', (req, res) => {
  const newUser = req.body;
  if (!_.isEmpty(newUser)) {
    newUser.id = users.length + 1; // Simple ID generation
    users.push(newUser);
    res.status(201).json(newUser);
  } else {
    res.status(400).json({ message: 'Invalid user data' });
  }
});

// PUT /users/:id - Update an existing user
app.put('/users/:id', (req, res) => {
  const user = findUserById(req.params.id);
  if (user) {
    _.merge(user, req.body);
    res.status(200).json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// DELETE /users/:id - Delete a user by ID
app.delete('/users/:id', (req, res) => {
  const index = _.findIndex(users, { id: parseInt(req.params.id) });
  if (index > -1) {
    users.splice(index, 1);
    res.status(204).end();
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});