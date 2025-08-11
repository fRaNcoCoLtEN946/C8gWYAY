// 代码生成时间: 2025-08-11 22:22:49
// Require lodash
const _ = require('lodash');

// Define the inventory object
let inventory = {};

// Function to add a product to the inventory
function addProduct(productId, quantity) {
    if (typeof productId !== 'string' || typeof quantity !== 'number') {
        throw new Error('Invalid input type. Product ID must be a string and quantity must be a number.');
    }
    if (quantity <= 0) {
        throw new Error('Quantity must be greater than 0.');
    }
    
    if (!inventory.hasOwnProperty(productId)) {
        inventory[productId] = 0;
    }
    
    inventory[productId] += quantity;
}

// Function to remove a product from the inventory
function removeProduct(productId, quantity) {
    if (typeof productId !== 'string' || typeof quantity !== 'number') {
        throw new Error('Invalid input type. Product ID must be a string and quantity must be a number.');
    }
    if (quantity <= 0) {
        throw new Error('Quantity must be greater than 0.');
    }
    
    if (!inventory.hasOwnProperty(productId)) {
        throw new Error('Product not found in inventory.');
    }
    
    if (inventory[productId] < quantity) {
        throw new Error('Not enough quantity in inventory.');
    }
    
    inventory[productId] -= quantity;
}

// Function to get the current inventory
function getCurrentInventory() {
    return _.cloneDeep(inventory);
}

// Function to search for a product in the inventory
function searchProduct(productId) {
    if (typeof productId !== 'string') {
        throw new Error('Product ID must be a string.');
    }
    
    if (inventory.hasOwnProperty(productId)) {
        return inventory[productId];
    }
    
    return null;
}

// Export the functions
module.exports = {
    addProduct,
    removeProduct,
    getCurrentInventory,
    searchProduct
};