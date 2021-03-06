---
layout: default
title: Index
unitstandard: 115373-SO1-AC1
---

# Trees

A Tree is a hierarchical data structure and is a widely used by web browsers. In fact all web pages are Tree data structures.
The DOM (Document Object Model) is a Tree data structure. HTML elements contains other HTML elements, with other HTML elements in them, and so on.

Learn more about Trees by [in this youtube video](https://www.youtube.com/watch?v=mFptHjTT3l8).

**A search friendly tree**

Next you will learn about a special type of tree called a Binary Search Tree (BST). A BST is an efficient way to structure data that you want to search through.

# Binary Tree tutorial

> Work through this tutorial in a hands-on workshop with your mentor if required.

## Introduction

This tutorial is an introduction of how to create and use Binary Search Trees.

A Binary Search Tree (BST) is a special Tree where each Node has a left and a right Node. The left Node's value is always smaller than the parent Nodes value. The right Nodes value is always bigger than the parent Nodes value. This makes it a data structure that is efficient to search through. The structure makes it possible to find data without going through all the entries in the tree. Search algorithms can make assumptions about where data will be in the tree. You can have balanced and unbalanced Binary Search Trees. We will focus on unbalanced ones.

## Create a BST

Let's create our own Binary Search Tree.

Here is a typical BST Node:

```javascript
var TreeNode = function(data, left, right){
    this.data = data;
    this.left = left;
    this.right = right;
};
```

This Node is like the one you used to create a Linked List, but instead of a `next` property there's a `left` and a `right` property.

Use the TreeNode like this:

```javascript
var leftNode = new TreeNode(5, null, null);
var rightNode = new TreeNode(13, null, null);

var rootNode = new TreeNode(7, leftNode, rightNode);

console.log(rootNode);
```

> Run the Code using NodeJS. And see what it looks like. Remember to add the TreeNode constructor function to your script.

Start with this skeleton and create a Binary Search Tree class to which you can add values.

```javascript
var BST = function(){
    this.root = null;
    this.add = function(num){
        // Add the code to add Tree Nodes here
    }
}
```

To see all the values in the BST you can use the [prettyjson](https://www.npmjs.com/package/prettyjson) module.

Using code like this:

```javascript
console.log(prettyjson.render(bst.root));
```

In the example above the TreeNodes were hard coded to be in the right place. The TreeNode with the smallest value on the left and the TreeNode with the biggest value on the right.

Instead of hard coding the values the Tree's `add` function should know where to add the Tree node containing the new value. To implement this, follow the steps below.

### Step 1

In the `add` function add the following functionality.

When calling the add function:

* If the root node is null initialize a new `TreeNode` object and assign it to the root node.
* If the root Node is not null and the new data value is:
    * smaller than the root Nodes value, assign a left Node to the root Node.
    * bigger than the root Nodes value, add a right Node to the root Node

What is the outcome?

Not what you need...

### Step 2

You should assign new left and right Nodes when there are not already a corresponding Node. To prevent that you don't override existing Nodes as in `Step 1`.

Check the value in the root Node like this:

* If the value that you want to add is bigger than the value in the root Node, check if the right Node already exists. If not, add a new right Node.
*  Otherwise do the same for the left Node.
*  Add a new Node if the target Node doesn't already exist.

What is the outcome of this?

Is this what you need?

### Step 3

What you need to next is to check if a Node have a left or right Node that already exists, depending on the value. If the Node already exists you need to apply the logic from step 2 on the Node that already exists.

You need to keep on doing this until you find a place to add the new Node. Add the new Node to the existing Node that has the correct Node that is null (left or right as required).

## Add functionality to it

Now you have a Binary Search Tree, how could you use it? One thing you can do is finding the smallest entry in the Tree. To do that you need to navigate all the way down the Nodes always selecting the left Node until you find a Node with a null left Node. That Node will contain the Node with the smallest value in the Tree.

> Try it!

How would you find the biggest number in the Tree?

> Did you find the biggest number?

## Use it

Now go ahead and create a Binary Search Tree that can find Nelisa's most popular and least popular products for a given week.

You can read more about [the difference between Trees and Graphs](http://freefeast.info/difference-between/difference-between-trees-and-graphs-trees-vs-graphs/).
