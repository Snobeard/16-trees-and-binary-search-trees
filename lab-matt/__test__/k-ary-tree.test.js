'use strict';

const KaryTree = require('../lib/k-ary-tree');

describe('K-Ary-Tree', () => {
  let tree = new KaryTree(1);
  let two = new KaryTree(2);
  let three = new KaryTree(3);
  let four = new KaryTree(4);
  let five = new KaryTree(5);
  let six = new KaryTree(6);

  tree.appendChild(two);
  tree.appendChild(three);
  two.appendChild(four);
  two.appendChild(five);
  two.appendChild(six);

  describe('.appendChild()', () => {
    test('should properly append a new child to a specific k-ary-tree node', () => {
      expect(tree.value).toEqual(1);
      expect(tree._children.includes(two)).toBeTruthy();
      expect(tree._children.includes(three)).toBeTruthy();
      expect(two._children.includes(four)).toBeTruthy();
      expect(two._children.includes(five)).toBeTruthy();
      expect(two._children.includes(six)).toBeTruthy();
    });

    test('testing cases that should be false after appending children to a k-ary-tree', () => {
      expect(() => {
        tree.appendChild(4);
      }).toThrow('Must append a k-ary tree');

      expect(tree.value).toEqual(1);
      expect(tree._children.includes(five)).toBeFalsy();
      expect(tree._children.includes(28)).toBeFalsy();
      expect(two._children.includes(three)).toBeFalsy();
      expect(two._children.includes('five')).toBeFalsy();
      expect(two._children.includes(two)).toBeFalsy();
    });
  });

  describe('.find(value)', () => {
    test('finds the first given value in the tree using breadth first traversal', () => {
      expect(tree.find(1)).toEqual(tree);
      expect(tree.find(2)).toEqual(two);
      expect(tree.find(3)).toEqual(three);
      expect(tree.find(4)).toEqual(four);
      expect(tree.find(5)).toEqual(five);
      expect(tree.find(6)).toEqual(six);
    });
    
    test('if the value is not found it will return with "Value: \'<value>\' Not Found', () => {
      expect(tree.find(0)).toEqual('Value: \'0\' Not Found');
      expect(tree.find(10)).toEqual('Value: \'10\' Not Found');
      expect(tree.find(20)).toEqual('Value: \'20\' Not Found');
      expect(tree.find(100)).toEqual('Value: \'100\' Not Found');
      expect(tree.find(200)).toEqual('Value: \'200\' Not Found');
      expect(tree.find(300)).toEqual('Value: \'300\' Not Found');
    });
  });

  describe('.toString()', () => {
    test('should combine all child nodes into a string using a breath-first and concatenate their values separated by a newline', () => {
      expect(tree.toString()).toEqual('1\n2\n3\n4\n5\n6');
      expect(two.toString()).toEqual('2\n4\n5\n6');
      expect(three.toString()).toEqual('3');
      expect(four.toString()).toEqual('4');
      expect(six.toString()).toEqual('6');
    });
  });

  describe('.toArray()', () => {
    test('should use a depth-first traversal and push all the tree\'s elements into an array', () => {
      expect(tree.toArray()).toEqual([1,3,2,6,5,4]);
      expect(two.toArray()).toEqual([2,6,5,4]);
      expect(three.toArray()).toEqual([3]);
      expect(four.toArray()).toEqual([4]);
      expect(six.toArray()).toEqual([6]);
    });
  });
});