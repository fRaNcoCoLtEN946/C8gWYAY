// 代码生成时间: 2025-08-21 07:00:36
 * A simple RESTful API interface using Node.js and Express with Lodash for utility functions.
 */

const express = require('express');
const lodash = require('lodash');

// Initialize the express app
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Sample data array for demonstration purposes
const items = [{
  id: 1,
  name: 'Item 1'
}, {
  id: 2,
  name: 'Item 2'
}];

// Retrieve all items
app.get('/api/items', (req, res) => {
  res.status(200).json(items);
});

// Retrieve a single item by id
app.get('/api/items/:id', (req, res) => {
  const item = lodash.find(items, { id: parseInt(req.params.id) });
  if (item) {
    res.status(200).json(item);
  } else {
    // Item not found, send 404 status
    res.status(404).send('Item not found');
  }
});

// Create a new item
app.post('/api/items', (req, res) => {
  const newItem = {
    id: items.length + 1,
    name: req.body.name
  };
  items.push(newItem);
  res.status(201).json(newItem);
});

// Update an existing item
app.put('/api/items/:id', (req, res) => {
  const itemIndex = lodash.findIndex(items, { id: parseInt(req.params.id) });
  if (itemIndex > -1) {
    items[itemIndex].name = req.body.name;
    res.status(200).json(items[itemIndex]);
  } else {
    // Item not found, send 404 status
    res.status(404).send('Item not found');
  }
});

// Delete an item by id
app.delete('/api/items/:id', (req, res) => {
  const itemIndex = lodash.findIndex(items, { id: parseInt(req.params.id) });
  if (itemIndex > -1) {
    items.splice(itemIndex, 1);
    res.status(200).send('Item deleted');
  } else {
    // Item not found, send 404 status
    res.status(404).send('Item not found');
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});