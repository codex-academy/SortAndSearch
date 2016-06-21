---
layout: default
title: Index

unitstandard: 115373-SO1-AC1, 115388-SO1-AC2

---

# Data Structures

Data and how data is structured is a major part of programming. We spend a lot of time formatting and structuring data to solve problems and come up with answers to solutions.

There are some specific data structures that industry came up with that solve certain recurring challenges. We will be looking at a few of those. The include the following data structures Queues, Stacks, Graphs and Trees.

## Queue

A Queue is a first in first out data structure.

Look at this code and try it out:

```javascript

var q = [];

//queue
q.push('apple');
q.push('pear');
q.push('mango');

//all the items is attached to the back of the list
console.log(l);
//the first item are taken of the list
console.log(q.shift());
//only pear and mango will be on the list
console.log(l);
//what will this print?
console.log(q.shift());
//what will remain on the list/queue?
```

**Todo**

Create your own `Queue` Object (constructor function) that wraps a list object. It should have to two methods `enqueue` and `dequeue`. The `enqueue` method should put an item unto the queue. And the `dequeue` method should remove and return the item in front of the queue. Your object should have a `length` function that returns the length our the queue.


## Stack

A Stack is Last in First Out data structure.

Look at this code and try it out:

```javascript
//use a list as a stack
var stack = [];
// push items on the stack
stack.push('apple');
stack.push('pear');
stack.push('mango');
// all the fruits are on the Stack
console.log(l);
//printing 'mango'
console.log(stack.pop());
// only 'apples' and 'pears' remains
console.log(l);
//what will this prints?
console.log(stack.pop());
```

## Graphs

Then there are graphs - data structure which links a node to one or more other nodes. Your Facebook friends are a prime example of a Graph data structure. A Graph data structure links you to your multitude of friends and them to their friends of which you can be one.

```javascript

// add Graph example

```

**Todo:**

Use a Graph to show which product is in which category.

## Trees

A Tree is a graph with stricter rules, it only allows one path between two nodes.

Learn more about Trees [here](https://www.youtube.com/watch?v=mFptHjTT3l8)

You can read [here](http://freefeast.info/difference-between/difference-between-trees-and-graphs-trees-vs-graphs/) how a Graphs and Trees are different.

## When is it usefull?

Which of the data structures best represent the row of customers waiting to be served at your local bank?

> TODO - think of more everyday examples of Queues, Stacks, Graphs and Trees.
