---
layout: default
title: Index
unitstandard: 115373-SO1-AC1
---

# Nodes and pointers

## Introduction

In the warm-up session you worked with JavaScript lists, swapping the list entries around. What if I told you had to do the first warm-up exercise again, but you weren't allowed to use JavaScript lists? How would you approach it?

**pregnant pause...**

You would need to create your own List. How would you do that?

**more silence**

Why not use JavaScript objects, to point to other JavaScript objects.

How would that work?

## Nodes and pointers applied

How about creating a `Node` object that can contain some data and points to another `Node` object? In effect, that would create a list of inter-connected Objects where one Object points to the next one.

Let's try it out:

```javascript
var Node = function(data, next){
    this.data = data;
    this.next = next;
}
```

Let's recreate the list from the first exercise:

```javascript
// Create this
// ['apple', 'pear', 'mango', 'banana']

//Create a list by using nested Nodes
var fruitList = new Node('apple', new Node('pear',
                                  new Node('mango',
                                  new Node('banana', null))));
```

Another way to create the list would be:

```javascript
//First create all the Nodes
var apple = new Node('apple', null),
    pear = new Node('pear', null),
    mango = new Node('mango', null),
    banana = new Node('banana', null);

//now link the Nodes
apple.next = pear;
pear.next = mango;
mango.next = banana;
```

Now that you have a list of fruits, experiment a bit:

```javascript
// Let's print out 'apple'
console.log(fruitList.data);

// Let's print out 'pear'
console.log(fruitList.next.data);

// How can you print out 'mango'

```

**Try this:**

* Loop through all the nodes in `fruitList` and print out the fruit names
    * how do you know you are at the last Node in the list
* Swap the first Node with the second Node in `fruitList`
* Swap the first Node with the last Node in `fruitList`


**Given this list of Node**

```javascript
//First create all the Nodes
var node1 = new Node(17, null),
    node2 = new Node(5, null),
    node3 = new Node(72, null),
    node4 = new Node(32, null),
    node5 = new Node(23, null);

//now link the Nodes
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
```

Compare the values in each Node with the next Node and swap the node around if the first Node's values is bigger than the next Node's value. What is the outcome? Where does the Node with the biggest value end up? Why is that?

## Linked Lists

As you can see without using Javascript's list object it is possible to create a list of fruits or numbers.

The list of `Nodes` is basic and cumbersome to work with, but using a `Node` object we can create a chain of nodes that reference each other.

A list of Nodes is called a `Linked List`. Each Node is linked to the next Node with the last Node in the list not linked to anything. As a result one can traverse a Linked List by starting at the root Node, getting the value of the Node and the next Node it is referencing too, until you reach the end of the list where the next Node of a given Node is null.

One also get `doubly Linked List` where list `Nodes` can point to both the next and the previous `Node` in the chain. This makes your Linked List data structure more flexible and easier to navigate.

### Pro's and Con's

What are the Pro's and Con's of a Linked List? How is a doubly Linked List beneficial?

## Beyond Linked List

Using a similar approach one can create various different data structures such as Queues, Stacks, Graphs and Trees using `Node` objects that link to each other. More about that later.
