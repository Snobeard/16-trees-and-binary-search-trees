# 16: Binary Search Tree
Description: **Lab 16 of Code Fellows JavaScript 401d19** </br>
Author: **Matthew LeBlanc** </br>
Date: **12/26/17**

## Features
This lab implements the creation of a binary search tree with .insert(), .find(), and .remove() methods.

## Tech/Framework Used
- node.js
- javascript
- Visual Studio Code

## Requirements
- node.js

## Usage
1. `cd` into the lab-matt folder
2. `npm install` the required dev dependency packages
3. `npm run test` to use `jest` to run the test coverage
4. `-optional-` use the `binary-search-tree.js` from the lib folder if wanting to import the binary search tree.

## Dependencies
<u>DEV</u>
1. `eslint`
2. `jest`

## Binary Search Tree Methods
- `.insert(<value>)` - adds a value to a current binarySearchTree 
  - throws an error if the value already exists
  - throws an error if the value is not a number

- `.find(<value>)` - returns true if the tree contains the value, otherwise false

- `.remove(<value>)` - removes the given value from the tree and replaces it with the largest value to it's left, and adjusts position around it respectively