const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
	constructor(value) {
		this.data = value;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	constructor() {
		this.tree = null;
	}

	root() {
		return this.tree;
	}

	add(data) {
		const newNode = new Node(data);
		if (!this.tree) {
			this.tree = new Node(data);
			return;
		}
		let currentNode = this.tree;
		while(currentNode) {
			if(currentNode.data === newNode.data) {
				return currentNode;
			}
			if (newNode.data < currentNode.data) {
				if (!currentNode.left) {
					currentNode.left = newNode;
					return;
				}
				currentNode = currentNode.left;
			} else {
				if (!currentNode.right) {
					currentNode.right = newNode;
					return;
				}
				currentNode = currentNode.right;
			}
		}
	}

	has(data) {
		return searchNode(this.tree, data);
		function searchNode(node, data) {
			if (!node) {
				return false;
			} else {
				if (node.data === data) {
					return true;
				}
			}
			return data < node.data ? searchNode(node.left, data) :
			searchNode(node.right, data);
		}
	}

	find(data) {
		return findNode(this.tree, data)

		function findNode(node, data){
			if (!node) {
				return null;
			}
			if (node.data === data){
				return node;
			}
			return data < node.data ?
			findNode(node.left, data) :
			findNode(node.right, data)
		}
	}
	remove(data) {
		this.tree = removeNode(this.tree, data);

		function removeNode(node, data) {
			if (!node) {
				return null;
			}

			if (data < node.data) {
				node.left = removeNode(node.left, data)
				return node;
			} else if (data > node.data) {
				node.right = removeNode(node.right, data);
				return node;
			} else {
				if (!node.left && !node.right) {
					return null;
				}
			}
			if (!node.left) {
				node = node.right;
				return node;
			}
			if (!node.right) {
				node = node.left;
				return node;
			}
			let minRight = node.right
				while (minRight.left) {
					minRight = minRight.left
				}
				node.data = minRight.data
				node.right = removeNode(node.right, minRight.data)
				return node;
		}	
	}
	min() {
		if (!this.tree) {
			return null
		}

		let node = this.tree;
		while(node.left) {
			node = node.left;
		}
		return node.data;
	}
	max() {
		if (!this.tree) {
			return null
		}
		let node = this.tree;
		while(node.right) {
			node = node.right;
		}
		return node.data;
	}
}
const myBinary = new BinarySearchTree();
module.exports = {
  BinarySearchTree
};