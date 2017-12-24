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

  breadthFirstSearch() {
    let queue = new Queue();
    queue.enqueue(this);

    while (queue.getLength() > 0) {
      let current = queue.dequeue();
      console.log(`Visiting ${current.value}`);

      for (let child of current._children) {
        queue.enqueue(child);
      }
    }
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
}

module.exports = KaryTree;