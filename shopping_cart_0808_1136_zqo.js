// 代码生成时间: 2025-08-08 11:36:11
// Import lodash library
const _ = require('lodash');

/**
 * Shopping Cart Class
 */
class ShoppingCart {
  /**
   * Creates a new instance of the ShoppingCart class.
   *
   * @param {Array} products - An array of product objects.
   */
  constructor(products = []) {
    this.products = products;
  }

  /**
   * Adds a product to the shopping cart.
   *
   * @param {Object} product - The product object to add.
   * @param {Number} quantity - The quantity of the product to add.
   *
   * @throws {Error} If the product does not exist or quantity is not a positive number.
   */
  addProduct(product, quantity) {
    if (!product || quantity <= 0) {
      throw new Error('Invalid product or quantity.');
    }

    const existingProduct = this.products.find(p => p.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += quantity;
    } else {
      this.products.push({ ...product, quantity });
    }
  }

  /**
   * Removes a product from the shopping cart.
   *
   * @param {Number} productId - The ID of the product to remove.
   *
   * @throws {Error} If the product does not exist in the cart.
   */
  removeProduct(productId) {
    const index = this.products.findIndex(p => p.id === productId);
    if (index === -1) {
      throw new Error('Product not found in the cart.');
    }

    this.products.splice(index, 1);
  }

  /**
   * Updates the quantity of a product in the shopping cart.
   *
   * @param {Number} productId - The ID of the product to update.
   * @param {Number} quantity - The new quantity of the product.
   *
   * @throws {Error} If the product does not exist in the cart or the quantity is not a positive number.
   */
  updateQuantity(productId, quantity) {
    if (quantity <= 0) {
      throw new Error('Invalid quantity. Quantity must be a positive number.');
    }

    const product = this.products.find(p => p.id === productId);
    if (!product) {
      throw new Error('Product not found in the cart.');
    }

    product.quantity = quantity;
  }

  /**
   * Gets the total cost of the shopping cart.
   *
   * @returns {Number} The total cost of the shopping cart.
   */
  getTotalCost() {
    return this.products.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);
  }

  /**
   * Clears the shopping cart.
   *
   * @returns {Void}
   */
  clearCart() {
    this.products = [];
  }
}

module.exports = ShoppingCart;