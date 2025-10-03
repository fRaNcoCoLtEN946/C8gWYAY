// 代码生成时间: 2025-10-04 03:40:22
// Import Lodash library
const _ = require('lodash');

// Define the currency conversion rates
const currencyRates = {
  USD: 1.0,
  EUR: 0.88,
  GBP: 0.8,
  CNY: 6.45
};

// Define the product catalog
const products = [
  { id: 1, name: 'Smartphone', priceUSD: 800 },
  { id: 2, name: 'Laptop', priceUSD: 1200 },
  { id: 3, name: 'Headphones', priceUSD: 150 }
];

// Define the cart storage
let cart = [];

/**
 * Converts the product price from USD to the desired currency
 * @param {number} priceUSD - The price of the product in USD
 * @param {string} currency - The target currency code
 * @returns {number} The converted price
 */
function convertCurrency(priceUSD, currency) {
  const rate = currencyRates[currency];
  if (!rate) {
    throw new Error('Unsupported currency');
  }
  return priceUSD * rate;
}

/**
 * Adds a product to the cart
 * @param {number} productId - The ID of the product to add
 * @param {string} currency - The currency code for the cart
 * @param {number} quantity - The quantity to add
 */
function addToCart(productId, currency, quantity) {
  const product = _.find(products, { id: productId });
  if (!product) {
    throw new Error('Product not found');
  }
  const convertedPrice = convertCurrency(product.priceUSD, currency);
  const cartItem = { ...product, price: convertedPrice, quantity };
  cart = _.uniqBy([...cart, cartItem], 'id'); // Ensure no duplicates
}

/**
 * Lists all products with their prices converted to the desired currency
 * @param {string} currency - The target currency code
 * @returns {Array} The list of products with converted prices
 */
function listProducts(currency) {
  return products.map(product => {
    const convertedPrice = convertCurrency(product.priceUSD, currency);
    return { ...product, price: convertedPrice };
  });
}

// Example usage
try {
  console.log('Products in USD:', listProducts('USD'));
  addToCart(1, 'EUR', 1);
  console.log('Cart:', cart);
} catch (error) {
  console.error('An error occurred:', error.message);
}
