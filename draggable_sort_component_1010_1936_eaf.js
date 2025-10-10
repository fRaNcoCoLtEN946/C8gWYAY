// 代码生成时间: 2025-10-10 19:36:52
// Import Lodash library
const _ = require('lodash');

/**
 * DraggableSort class
 * @param {string} containerId - The ID of the container element where the items will be placed.
 * @param {array} items - The array of items to be sorted.
 */
class DraggableSort {
    constructor(containerId, items) {
        this.container = document.getElementById(containerId);
        if (!this.container) {
            throw new Error(`Container with ID ${containerId} not found.`);
        }
        this.items = items;
        this.init();
    }

    /**
     * Initializes the draggable sort component by attaching event listeners and rendering the items.
     */
    init() {
        // Create the sortable items
        this.renderItems();

        // Add event listeners for dragging
        this.addDragEventListeners();
    }

    /**
     * Renders the items in the container.
     */
    renderItems() {
        // Clear any existing content
        this.container.innerHTML = '';

        // Create and append each item to the container
        this.items.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.textContent = item;
            itemElement.draggable = true;
            this.container.appendChild(itemElement);
        });
    }

    /**
     * Adds event listeners for dragging and dropping.
     */
    addDragEventListeners() {
        // Listener for drag start
        this.container.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', e.target.id);
        });

        // Listener for drag over (to allow dropping)
        this.container.addEventListener('dragover', (e) => {
            e.preventDefault(); // Necessary to allow dropping
        });

        // Listener for drop
        this.container.addEventListener('drop', (e) => {
            e.preventDefault();
            const draggedId = e.dataTransfer.getData('text/plain');
            const draggedElement = document.getElementById(draggedId);
            const targetIndex = Array.from(this.container.children).indexOf(e.target);

            // Remove the dragged element from its original position
            this.container.removeChild(draggedElement);

            // Insert the dragged element at the new position
            if (targetIndex > -1) {
                this.container.insertBefore(draggedElement, this.container.children[targetIndex]);
            }

            // Update the items array to reflect the new order
            this.updateItemsOrder();
        });
    }

    /**
     * Updates the items array based on the new order of elements in the container.
     */
    updateItemsOrder() {
        this.items = Array.from(this.container.children).map((child) => child.textContent);
    }

    /**
     * Get the sorted items.
     * @returns {array} The sorted items.
     */
    getSortedItems() {
        return _.cloneDeep(this.items);
    }
}

// Example usage:
// Create a new DraggableSort instance with a container ID and an array of items.
const mySortableList = new DraggableSort('sortable-container', ['Item 1', 'Item 2', 'Item 3']);

// Get the sorted items after reordering.
const sortedItems = mySortableList.getSortedItems();
console.log(sortedItems); // Output the sorted items to console.
