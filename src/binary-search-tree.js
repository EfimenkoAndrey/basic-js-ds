const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
	constructor(value) {
		this.value = value;
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

	add(value) {
		const newNode = new Node(value);
		if (!this.tree) {
			this.tree = newNode;
			return;
		}
		let currentNode = this.tree;
		while(currentNode) {
			if(currentNode.value === newNode.value) {
				return currentNode;
			}
			if (newNode.value < currentNode.value) {
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

	has(value) {
		return searchNode(this.tree, value);
		function searchNode(node, value) {
			if (!node) {
				return false;
			} else {
				if (node.value === value) {
					return true;
				}
			}
			return value < node.value ? searchNode(node.left, value) :
			searchNode(node.right, value);
		}
	}

	find(value) {
		return findNode(this.tree, value)

		function findNode(node, value){
			if (!node) {
				return null;
			}
			if (node.value === value){
				return node;
			}
			return value < node.value ?
			findNode(node.left, value) :
			findNode(node.right, value)
		}
	}
	remove(value) {
		this.tree = removeNode(this.tree, value);

		function removeNode(node, value) {
			if (!node) {
				return null;
			}

			if (value < node.value) {
				node.left = removeNode(node.left, value)
				return node;
			} else if (value > node.value) {
				node.right = removeNode(node.right, value);
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
				node.value = minRight.value
				node.right = removeNode(node.right, minRight.value)
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
		return node.value;
	}
	max() {
		if (!this.tree) {
			return null
		}
		let node = this.tree;
		while(node.right) {
			node = node.right;
		}
		return node.value;
	}
}
const myBinary = new BinarySearchTree();
module.exports = {
  BinarySearchTree
};