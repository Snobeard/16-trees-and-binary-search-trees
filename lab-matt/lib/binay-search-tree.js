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

  remove(value) {
    let foundValue;
    let parent;
    let current = this;

    while (!foundValue && current) { // until value is found or no more leafs
      if (current.value > value) {
        parent = current;
        current = current.left;

      } else if (current.value < value) {
        parent = current;
        current = current.right;

      } else {
        foundValue = value;
      }
    }

    if (foundValue) {
      if (current.left && current.right) {
        return this._removeWithTwoChildren(parent, current);
      }

      else {
        return this._removeWithOneChildOrLess(parent, current);
      }

    } else {
      return 'No Node Found';
    }
  }

  _removeWithOneChildOrLess(parent, current) { // DONE
    if (!parent) { // if the value is at the root
      if (current.right) {
        current.value = current.right.value;
        current.right = current.right.right;
        current.left = current.right.left;
        return;

      } else if (current.left) {
        current.value = current.left.value;
        current.right = current.left.right;
        current.left = current.left.left;
        return;

      } else {
        this.value = null;
      }
    }

    else {
      if (parent.value > current.value) {
        return parent.left = current.left;
      } else {
        return parent.right = current.right;
      }
    }
  }

  _removeWithTwoChildren(parent, current) {
    if (!parent) { // if the value is at the root

      let replacement = current.left;
      let replacementParent;

      while (replacement.right) {
        replacementParent = replacement;
        replacement = replacement.right;
      }
      //it's not the first node on the left
      if (replacementParent !== null){

        //remove the new root from it's 
        //previous position
        replacementParent.right = replacement.left;

        //give the new root all of the old 
        //root's children
        replacement.right = this._root.right;
        replacement.left = this._root.left;
      } else {
        //just assign the children
        replacement.right = this._root.right;
      }
      //officially assign new root
      this._root = replacement;
    }
    
    else {
      let replacement = current.left;
      let replacementParent = current;
  
      //find the right-most node
      while(replacement.right !== null){
        replacementParent = replacement;
        replacement = replacement.right;
      }
  
      replacementParent.right = replacement.left;
  
      //assign children to the replacement
      replacement.right = current.right;
      replacement.left = current.left;
  
      //place the replacement in the right spot
      if (current.value < parent.value){
        parent.left = replacement;
      } else {
        parent.right = replacement;
      }
    }


  }

  // _bubbleDown(node, foundValue) {
  //   let minIndex = foundValue;
  //   if (!foundValue) {
  //     return 'No Node Found';
  //   }

  //   if (node.value === foundValue) {
  //     if (!node.left && !node.right) {
  //       return node = null;
  //     }
  //   }


  //   if (this.left < foundValue) {
  //     if (this._data[minIndex] > this._data[leftIndex]) {
  //       minIndex = leftIndex;
  //     }
  //   }

  //   if (rightIndex <= this._data.length - 1) {
  //     if (this._data[minIndex] > this._data[rightIndex]) {
  //       minIndex = rightIndex;
  //     }
  //   }

  //   if (minIndex !== rootIndex) {
  //     this._swapValues(rootIndex, minIndex);
  //     this._bubbleDown(minIndex);
  //   }
  // }
}

module.exports = BinarySearchTree;