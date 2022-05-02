const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
class ListNode {
	constructor(x) {
		this.value = x;
		this.next = null;
	}
}
 */	
function removeKFromList(l, k) {
	class List {
		constructor() {
			this.head = l;
		}
		get() {
			return this.head;
		}
		removeAt(x) {
			let indexK = this.indexOf(x);
			if (indexK < 0 || indexK >= this.length) {
				return;
			}
			let current = this.head;
			if (indexK === 0) {
				this.head = current.next;
			} else {
				let prev = null;
				let index = 0;

				while(index < indexK) {
					prev = current;
					current = current.next;
					index++;
				}
				prev.next = current.next;
			}
			this.length--;
		}
		indexOf(x) {
			let current = this.head;
			let index = 0;
			while(current) {
				if (current.value === x) {
					return index;
				} else {
					current = current.next;
					index++;
				}
			}
			return -1;
		}
		remove(x) {
			while(this.indexOf(x) !== -1) {
				this.removeAt(x);
			}
		}
	}
	const list = new List();
	list.remove(k)
	return list.get();
}
module.exports = {
  removeKFromList
};
