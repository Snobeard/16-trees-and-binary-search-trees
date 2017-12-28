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
      expect(bsTree.find(10)).toEqual(true);
      expect(bsTree.find(5)).toEqual(true);
      expect(bsTree.find(8)).toEqual(true);
      expect(bsTree.find(12)).toEqual(true);
      expect(bsTree.find(1)).toEqual(true);
      expect(bsTree.find(19)).toEqual(true);
    });
    
    test('if the value is not found it will return with "Value: \'<value>\' Not Found', () => {
      expect(bsTree.find(0)).toEqual(false);
      expect(bsTree.find(10)).toEqual(true);
      expect(bsTree.find(20)).toEqual(false);
      expect(bsTree.find(100)).toEqual(false);
      expect(bsTree.find(200)).toEqual(false);
      expect(bsTree.find(300)).toEqual(false);
    });
  });

  describe('.remove(value)', () => {
    test.only('should remove the given value and \n-MOARLAZERS\n-MOARLAZERS\n-MOARLAZERS\n-MOARLAZERS', () => { // TODO - rename
      let bsTreeTwo = new BinarySearchTree(10);
      // bsTreeTwo.insert(15);
      // bsTreeTwo.insert(16);
      // bsTreeTwo.insert(17);
      // bsTreeTwo.insert(18);
      bsTreeTwo.insert(9);
      bsTreeTwo.insert(7);

      // expect(bsTreeTwo.right.value).toEqual(15);
      // expect(bsTreeTwo.right.right.value).toEqual(16);
      // expect(bsTreeTwo.right.right.right.value).toEqual(17);
      // expect(bsTreeTwo.right.right.right.right.value).toEqual(18);
      // expect(bsTreeTwo.left.value).toEqual(9);
      // expect(bsTreeTwo.left.left.value).toEqual(7);

      console.log('BEFORE',bsTreeTwo);
      bsTreeTwo.remove(9);
      console.log('AFTER',bsTreeTwo);
      
      expect(bsTreeTwo.value).toEqual(10);
      
      // console.log('BEFORE',bsTree);
      // bsTree.remove(19);
      // console.log('AFTER',bsTree);
      // expect(bsTree.right.right).toBe(null);
    });
  });

  //     10     //     8
  //    /  \    //    / \
  //   5   12   //   5  12
  //  / \    \  //  /     \
  // 1   8   19 // 1      19

  // describe('.toArray()', () => {
  //   test('should use a depth-first traversal and push all the tree\'s elements into an array', () => {
  //     expect(tree.toArray()).toEqual([1,3,2,6,5,4]);
  //     expect(two.toArray()).toEqual([2,6,5,4]);
  //     expect(three.toArray()).toEqual([3]);
  //     expect(four.toArray()).toEqual([4]);
  //     expect(six.toArray()).toEqual([6]);
  //   });
  // });
});