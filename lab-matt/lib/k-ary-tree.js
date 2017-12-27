'use strict';

const Queue = require('./queue');

class KaryTree {
  constructor(value) {
    this.value = value;
    this._children = [];
  }

  appendChild(tree) {
    if (!(tree instanceof KaryTree)) {
      throw new TypeError('Must append a k-ary tree');
    }
    this._children.push(tree);
  }

  find(value) {
    let queue = new Queue();
    queue.enqueue(this);

    while (queue.getLength() > 0) {
      let current = queue.dequeue();

      if (current.value === value) {
        return current;
      }

      for (let child of current._children) {
        queue.enqueue(child);
      }
    }
    return `Value: '${value}' Not Found`;
  }

  toString() {
    let queue = new Queue();
    queue.enqueue(this);
    let string = '';

    while (queue.getLength() > 0) {
      let current = queue.dequeue();

      string += `${current.value}\n`;

      for (let child of current._children) {
        queue.enqueue(child);
      }
    }
    return string.trim();
  }

  toArray() {
    let stack = [this];
    let resultArray = [];

    while (stack.length > 0) {
      let current = stack.pop();
      
      for (let child of current._children) {
        stack.push(child);
      }
      
      resultArray.push(current.value);
    }
    return resultArray;
  }
}

module.exports = KaryTree;

