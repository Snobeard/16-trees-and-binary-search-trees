'use strict';

const BinarySearchTree = require('../lib/binay-search-tree');

describe('Binary Search Tree', () => {
  let bsTree = new BinarySearchTree(10);

  bsTree.insert(5);
  bsTree.insert(8);
  bsTree.insert(12);
  bsTree.insert(1);
  bsTree.insert(19);

  describe('.insert()', () => {
    test('should properly append a new child to a specific k-ary-tree node', () => {
      expect(bsTree.value).toEqual(10);
      expect(bsTree.left.value).toEqual(5);
      expect(bsTree.left.right.value).toEqual(8);
      expect(bsTree.right.value).toEqual(12);
      expect(bsTree.left.left.value).toEqual(1);
      expect(bsTree.right.right.value).toEqual(19);
    });

    test('should throw an error if the value is not a number', () => {
      expect(() => {
        bsTree.insert('four');
      }).toThrow('Binary Search Tree - value should be a number');
      expect(() => {
        bsTree.insert([1,3,4]);
      }).toThrow('Binary Search Tree - value should be a number');
      expect(() => {
        bsTree.insert({value: 1});
      }).toThrow('Binary Search Tree - value should be a number');
      expect(() => {
        bsTree.insert();
      }).toThrow('Binary Search Tree - value should be a number');
    });

    test('should throw an error if the value already exists', () => {
      expect(() => {
        bsTree.insert(5);
      }).toThrow('Binary Search Tree - value is already present');
    });
  });

  describe('.find(value)', () => {
    test('finds the first given value in the tree and return the node', () => {
      expect(bsTree.find(10)).toBeTruthy();
      expect(bsTree.find(5)).toBeTruthy();
      expect(bsTree.find(8)).toBeTruthy();
      expect(bsTree.find(12)).toBeTruthy();
      expect(bsTree.find(1)).toBeTruthy();
      expect(bsTree.find(19)).toBeTruthy();
    });
    
    test('if the value is not found it will return with "Value: \'<value>\' Not Found', () => {
      expect(bsTree.find(10)).toBeTruthy();
      expect(bsTree.find(0)).toBeFalsy();
      expect(bsTree.find(20)).toBeFalsy();
      expect(bsTree.find(100)).toBeFalsy();
      expect(bsTree.find(200)).toBeFalsy();
      expect(bsTree.find(300)).toBeFalsy();
    });
  });

  describe('.remove(value)', () => {
    test('should remove the given value and replace the values appropriately', () => {
      expect(bsTree.find(10)).toBeTruthy();

      bsTree.remove(10);

      expect(bsTree.find(10)).toBeFalsy();
      expect(bsTree.remove(10)).toEqual(null);
      expect(bsTree.value).toEqual(8);
      expect(bsTree.left.value < bsTree.value).toBeTruthy();
      expect(bsTree.left.left.value < bsTree.left.value).toBeTruthy();
      expect(bsTree.right.value > bsTree.value).toBeTruthy();
      expect(bsTree.right.right.value > bsTree.right.value).toBeTruthy();
      expect(bsTree.find(19)).toBeTruthy();
      expect(bsTree.right.right).not.toBeNull();

      bsTree.remove(19);

      expect(bsTree.find(19)).toBeFalsy();
      expect(bsTree.right.right).toBeNull();
      expect(bsTree.find(5)).toBeTruthy();

      bsTree.remove(5);

      expect(bsTree.find(5)).toBeFalsy();
      expect(bsTree.left.value).toEqual(1);
      expect(bsTree.find(8)).toBeTruthy();

      bsTree.remove(8);

      expect(bsTree.find(8)).toBeFalsy();
      expect(bsTree.value).toEqual(1);
      expect(bsTree.right.value).toEqual(12);
      expect(bsTree.find(1)).toBeTruthy();

      bsTree.remove(1);

      expect(bsTree.find(1)).toBeFalsy();
      expect(bsTree.value).toEqual(12);

      bsTree.insert(10);
      expect(bsTree.left.value).toEqual(10);

      bsTree.remove(12);
      expect(bsTree.value).toEqual(10);
      bsTree.remove(10);
    });
  });
});