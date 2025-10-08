// 代码生成时间: 2025-10-08 22:24:43
// Import lodash library
const _ = require('lodash');

class ClusterNode {
  constructor(id, status) {
    this.id = id; // Unique identifier for the node
    this.status = status; // Current status of the node (e.g., 'active', 'inactive')
  }
}

class ClusterManager {
  constructor(nodes) {
    this.nodes = nodes; // Array of ClusterNode instances
  }

  // Adds a new node to the cluster
  addNode(node) {
    if (!(node instanceof ClusterNode)) {
      throw new Error('Invalid node type. Expected ClusterNode instance.');
    }
    this.nodes.push(node);
  }

  // Removes a node from the cluster
  removeNode(nodeId) {
    this.nodes = _.filter(this.nodes, node => node.id !== nodeId);
  }

  // Updates the status of a node in the cluster
  updateNodeStatus(nodeId, newStatus) {
    const node = _.find(this.nodes, { id: nodeId });
    if (!node) {
      throw new Error(`Node with ID ${nodeId} not found.`);
    }
    node.status = newStatus;
  }

  // Retrieves all active nodes in the cluster
  getActiveNodes() {
    return _.filter(this.nodes, { status: 'active' });
  }

  // Retrieves all inactive nodes in the cluster
  getInactiveNodes() {
    return _.filter(this.nodes, { status: 'inactive' });
  }
}

// Example usage:
const nodes = [
  new ClusterNode(1, 'active'),
  new ClusterNode(2, 'inactive'),
  new ClusterNode(3, 'active')
];

const clusterManager = new ClusterManager(nodes);

console.log('All active nodes:', clusterManager.getActiveNodes());
clusterManager.addNode(new ClusterNode(4, 'active'));
console.log('All nodes after adding new node:', clusterManager.nodes);
clusterManager.updateNodeStatus(2, 'active');
console.log('Node 2 status after update:', _.find(clusterManager.nodes, { id: 2 }).status);
clusterManager.removeNode(1);
console.log('All nodes after removing node 1:', clusterManager.nodes);
