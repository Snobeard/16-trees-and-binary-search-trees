'use strict';

let KaryTree = require('./lib/k-ary-tree');

let one = new KaryTree(1);
let two = new KaryTree(2);
let three = new KaryTree(3);
let four = new KaryTree(4);
let five = new KaryTree(5);
let six = new KaryTree(6);
let seven = new KaryTree(7);
let eight = new KaryTree(8);

one.appendChild(two);
one.appendChild(three);
one.appendChild(four);

three.appendChild(five);
three.appendChild(six);
three.appendChild(seven);

six.appendChild(eight);