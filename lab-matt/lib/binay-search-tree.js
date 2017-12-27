'use strict';

class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Binary Search Tree - value should be a number');
    }
    if (this.value === value) {
      throw new Error('Binary Search Tree - value is already present');
    }

    if (this.value > value) {
      if (this.left) {
        this.left.insert(value);
        return;
      } else {
        this.left = new BinarySearchTree(value);
        return;
      }
    }

    if (this.right) {
      this.right.insert(value);
      return;
    } else {
      this.right = new BinarySearchTree(value);
      return;
    }
  }

  find(value) {
    if (value === this.value) {
      return true;
    }

    if (this.value > value) {
      if (this.left) {
        return this.left.find(value);
      } else {
        return false;
      } 
    }

    if (this.right) {
      return this.right.find(value);
    } else {
      return false;
    }
  }

  // TODO remove(value) {}



}

module.exports = BinarySearchTree;