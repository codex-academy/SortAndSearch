---
layout: default
title: Index
unitstandard: 115373-SO1-AC1
---

# More advanced data structures

## Trees

A Tree is a hierarchical data structure and is a widely used by web browsers. In fact all web pages are Tree data structures.
The DOM (Document Object Model) is a Tree data structure. HTML elements contains other HTML elements, with other HTML elements in them, and so on.

Learn more about Trees by [in this youtube video](https://www.youtube.com/watch?v=mFptHjTT3l8).

**A search friendly tree**

Next you will learn about a special type of tree called a Binary Search Tree (BST). A BST is an efficient way to structure data that you want to search through.

## Binary Tree tutorial

> Work through this tutorial in a hands-on workshop with your mentor if required.

### Introduction

This tutorial is an introduction of how to create and use Binary Search Trees.

A Binary Search Tree (BST) is a special Tree where each Node has a left and a right Node. The left Node's value is always smaller than the parent Nodes value. The right Nodes value is always bigger than the parent Nodes value. This makes it a data structure that is efficient to search through. The structure makes it possible to find data without going through all the entries in the tree. Search algorithms can make assumptions about where data will be in the tree. You can have balanced and unbalanced Binary Search Trees. We will focus on unbalanced ones.

### Create a BST

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

#### Step 1

In the `add` function add the following functionality.

When calling the add function:

* If the root node is null initialize a new `TreeNode` object and assign it to the root node.
* If the root Node is not null and the new data value is:
    * smaller than the root Nodes value, assign a left Node to the root Node.
    * bigger than the root Nodes value, add a right Node to the root Node

What is the outcome?

Not what you need...

#### Step 2

You should assign new left and right Nodes when there are not already a corresponding Node. To prevent that you don't override existing Nodes as in `Step 1`.

Check the value in the root Node like this:

* If the value that you want to add is bigger than the value in the root Node, check if the right Node already exists. If not, add a new right Node.
*  Otherwise do the same for the left Node.
*  Add a new Node if the target Node doesn't already exist.

What is the outcome of this?

Is this what you need?

#### Step 3

What you need to next is to check if a Node have a left or right Node that already exists, depending on the value. If the Node already exists you need to apply the logic from step 2 on the Node that already exists.

You need to keep on doing this until you find a place to add the new Node. Add the new Node to the existing Node that has the correct Node that is null (left or right as required).

### Add functionality to it

Now you have a Binary Search Tree, how could you use it? One thing you can do is finding the smallest entry in the Tree. To do that you need to navigate all the way down the Nodes always selecting the left Node until you find a Node with a null left Node. That Node will contain the Node with the smallest value in the Tree.

> Try it!

How would you find the biggest number in the Tree?

> Did you find the biggest number?

### Use it

Now go ahead and create a Binary Search Tree that can find Nelisa's most popular and least popular products for a given week.

You can read more about [the difference between Trees and Graphs](http://freefeast.info/difference-between/difference-between-trees-and-graphs-trees-vs-graphs/).

## Graphs

A graph data structure is good for modeling networks. It models collections of nodes that are inter connected well. Your Facebook friends are a prime example of a network that is a Graph data structure. A Graph data structure links you to your multitude of friends and them to their friends, of which you can be one. You can use a Graph to model your connections with friends and friends of your friends. You can run a query on it to find out if you have any friends, or a friend of a friend, that is called 'Xola' for instance.

You can also use a Graph to model different route options between destinations. You can then work out which route is the shortest.

A Vertex is a Node in a Graph. Edges link Vertices to each other, and are a combination of two Vertices.

A directional Graph indicates the direction of the link between two Vertices. An example of this is Twitter: users can follow each other. If User A is following User B the direction of the vertices is from User A to User B.

Edges can also have a weight, which is useful to put a value on a connection between two vertices. One can use this to model the distances between different towns.

You will use an adjacency list to model a Graph. An adjacency list is a list of keys each one which have a list of vertices it connects to.

### Graph tutorial

> Work through this tutorial in a hands-on workshop with your mentor if required.

Let's use a Graph to create a social network to find reliable tradesman and friends of friends that are tradesman. Good reliable plumbers, electricians, tilers, and bricklayers are always in high demand. Remember not all the people in this social network will be tradesman.

You will create a Graph data structure using an adjacency list. Next you will use a [Breadth-First search algorithm](https://www.youtube.com/watch?v=ytcPxRsZfcU) to find the tradesman you need that is the closest to you in the Social Network.

#### Step 1

Model the people in the network like this:

```javascript
var Person = function(name, phoneNumber, job){
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.job = job;
};

var joe = new Person ('Joe', '082 400 4512', 'Programmer');
var xola = new Person ('Xola', '083 736 4692', 'Plumber');
var jane = new Person ('Jane', '082 465 4532', 'Electrician');
var jabu = new Person ('Jabu', '084 790 1342', 'Tiler');
var andy = new Person ('Andy', '081 809 5103', 'Bricklayer');
var sammy = new Person ('Sammy', '073 671 0017', 'Plumber');
var scott = new Person ('Scott', '063 700 7801', 'Tiler')
```

#### Step 2

Next create an adjacency list to model a Graph of tradesman connections:

```javascript
var tradesmanNetwork = {};

tradesmanNetwork[joe.name] = [scott.name, jabu.name];
tradesmanNetwork[jabu.name] = [jane.name, xola.name, andy.name];
tradesmanNetwork[andy.name] = [sammy.name, jane.name, joe.name];
```

Looking at the tradesman Graph we can see that:

* Joe knows 2 Tilers;
* Jabu knows an Electrician, a Plumber and a Bricklayer;
* Andy knows a Plumber and an Electrician and Joe who is not a tradesman.

#### Step 3

Next you need to find a specific tradesman connected to a person in the network. For example: are there any Plumbers in Joe's network? To do that you can use a Breadth-First algorithm on the adjacency list.

It works like this:

* Create and empty queue data structure.
* Find all friends for the specified person, put them all in queue you created.
* While the queue is not empty keep on doing this:
  * Get the first entry of the queue.
  * Check if this person is of the tradesman type we are looking if it is return the tradesman details.
  * If not, find all the friends of the tradesman and add them to the back of the queue.
* If the queue is empty and no match was found yet, return null.

In code it looks like this:

```javascript
var findTradesman = function(personName, trade){
  // put all the persons friends into the queue.
  var tradesmanQueue = tradesmanNetwork[personName];
  //while the queue is not empty
  while(tradesmanQueue && tradesmanQueue.length !== 0){
    //get the first person on top of the queue
    var tradesman = tradesmanQueue.pop();
    //check if this person is the tradesman you are looking for
    if (tradesman && tradesman.job === trade){
      return tradesman;
    }
    //find all the friends of the current tradesman
    var tradesmanFriends = tradesmanQueue[tradesman.name];
    //add the friends to the queue only if the person got friends
    if(tradesManFriends !== undefined){
      tradesmanQueue = tradesmanQueue.concat(tradesmanFriends);
    }
  }
  //no matching tradesman was found
  return null;
}
```

#### Step 4 - Try it out!

Try to run this code on your own computer. Add some more people to the network and test it. Make sure that you are happy with how it's working. And that it finds the right people based on the criteria supplied.s

Make it easier to use the Social Network by creating functions and objects to create and maintain it. Also add some Mocha tests.

## Foundation to explore from

Now you have a solid foundation to start exploring other data structures from. Next you can look into using Graphs with the Depth-First Algorithm. Or how to use Dijkstra Algorithm to calculate the shortest route between two locations. You can learn more about the basics of route finding algorithms on [Khan Academy](https://www.khanacademy.org/computing/computer-science/algorithms/intro-to-algorithms/a/route-finding).
