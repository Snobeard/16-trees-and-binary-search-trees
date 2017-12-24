'use strict';

const KaryTree = require('../lib/k-ary-tree');

describe('K-Ary-Tree', () => {
  describe('appendChild', () => {
    let one = new KaryTree(1);
    let two = new KaryTree(2);
    let three = new KaryTree(3);
    let four = new KaryTree(4);
    let five = new KaryTree(5);
    let six = new KaryTree(6);

    one.appendChild(two);
    one.appendChild(three);
    two.appendChild(four);
    two.appendChild(five);
    two.appendChild(six);

    test('should properly append a new child to a specific k-ary-tree node', () => {
      expect(one.value).toEqual(1);
      expect(one._children.includes(two)).toBeTruthy();
      expect(one._children.includes(three)).toBeTruthy();
      expect(two._children.includes(four)).toBeTruthy();
      expect(two._children.includes(five)).toBeTruthy();
      expect(two._children.includes(six)).toBeTruthy();
    });

    test('testing cases that should be false after appending children to a k-ary-tree', () => {
      expect(one.value).toEqual(1);
      expect(one._children.includes(five)).toBeFalsy();
      expect(one._children.includes(28)).toBeFalsy();
      expect(two._children.includes(three)).toBeFalsy();
      expect(two._children.includes('five')).toBeFalsy();
      expect(two._children.includes(two)).toBeFalsy();
    });
  });
});