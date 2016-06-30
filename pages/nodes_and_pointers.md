---
layout: default
title: Index
unitstandard: 115373-SO1-AC2
---

# Nodes and pointers

## Introduction

In the warm up session you worked with JavaScript lists, swapping the list entries around. If I told you had to do the first warm up exercise, BUT you are not allowed to a built JavaScript lists. How would you approach it?

**pregnant pause...**

You will need to create your own List. How would you do that?

**more silence**

Why not use JavaScript objects, to point to other JavaScript objects.

How would that work?

## Nodes and pointers applied

How about creating a `Node` object that can contain some data and points to another `Node` object. So in effect creating a list of inter-connected Objects where the one Object points to the next object.

Let's try it out:

```javascript
var Node = function(data, next){
    this.data = data;
    this.next = next;
}
```

Let's recreate the list from the first exercise:

```javascript
// create this
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
    mango.next = banana;ß    
```


Now that you have a list of fruits.

Experiment a bit:

```javascript
//let's print out 'apple'
console.log(fruitList.data);

//let's print out 'pear'
console.log(fruitList.next.data);

// how can you print out 'mango'

```

**Try this:**

* Loop through all the nodes in `fruitList` and print out the fruit name
    * how do you know you are at the last Node in the list
* Swap the first Node with the second Node in `fruitList`
* Swap the first Node with the last Node in `fruitList`
* Compare the values in each Node with the next Node and swap the node around if the first Node's values is bigger than the next Node's value.

## Linked Lists

As you can see without using JavaScript's list object it is possible to create a list of fruits.

The list of `Nodes` are very basic and cumbersome to work with, but using a `Node` object we can create a chain of nodes that reference each other.

Such a list of Nodes is called a Linked List. Each Node is linked to the next Node with the last Node in the list not linked to anything. As a result one can traverse a Linked List by starting at the root Node, getting the value of the Node and the next Node it is referencing too, until you reach the end of the list where the next Node of a given Node is null.

One also get `doubly Linked List` where list `Nodes` can point to both the next and the previous `Node` in the chain. This makes your Linked List data structure more flexible and easier to navigate.

**Pro's and Con's** What are the Pro's and Con's of a Linked List? How are a doubly Linked List beneficial?

## Beyond Linked List

Using a similar approach one can create various different data structures such as Queues, Stacks, Graphs and Trees using `Node` objects that links to each other. But more about that later.
