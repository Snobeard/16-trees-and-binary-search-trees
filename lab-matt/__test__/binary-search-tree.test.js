'use strict';

const BinarySearchTree = require('../lib/binay-search-tree');

describe('K-Ary-Tree', () => {
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




  // describe('.find(value)', () => {
  //   test('finds the first given value in the tree using breadth first traversal', () => {
  //     expect(tree.find(1)).toEqual(tree);
  //     expect(tree.find(2)).toEqual(two);
  //     expect(tree.find(3)).toEqual(three);
  //     expect(tree.find(4)).toEqual(four);
  //     expect(tree.find(5)).toEqual(five);
  //     expect(tree.find(6)).toEqual(six);
  //   });
    
  //   test('if the value is not found it will return with "Value: \'<value>\' Not Found', () => {
  //     expect(tree.find(0)).toEqual('Value: \'0\' Not Found');
  //     expect(tree.find(10)).toEqual('Value: \'10\' Not Found');
  //     expect(tree.find(20)).toEqual('Value: \'20\' Not Found');
  //     expect(tree.find(100)).toEqual('Value: \'100\' Not Found');
  //     expect(tree.find(200)).toEqual('Value: \'200\' Not Found');
  //     expect(tree.find(300)).toEqual('Value: \'300\' Not Found');
  //   });
  // });

  // describe('.toString()', () => {
  //   test('should combine all child nodes into a string using a breath-first and concatenate their values separated by a newline', () => {
  //     expect(tree.toString()).toEqual('1\n2\n3\n4\n5\n6');
  //     expect(two.toString()).toEqual('2\n4\n5\n6');
  //     expect(three.toString()).toEqual('3');
  //     expect(four.toString()).toEqual('4');
  //     expect(six.toString()).toEqual('6');
  //   });
  // });

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