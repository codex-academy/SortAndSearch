---
layout: default
title: Index
unitstandard: 115373-SO1-AC1

---

# Data Structures

Data and how data is structured is a major part of programming. We spend a lot of time formatting and structuring data to solve problems and come up with answers to solutions.

There are some specific data structures that industry came up with that solve certain recurring challenges. We will be looking at a few of those. The include the following data structures Queues, Stacks, Graphs and Trees.

## Queue

A Queue is a First in First Out (FIFO) linear data structure.

In everyday life queues are very common, we routinely wait for our turn at the cash machine or at the supermarket. People can only join the queue from the back and the person in front of the queue is helped first.

In programming queues are also widely used and the [Event Loop](https://www.youtube.com/watch?v=8aGhZQkoFbQ) in JavaScript is a prime example of one. It is used to schedule the execution order of events in JavaScript.

You can easily create a simple Queue using a JavaScript list.

Look at this code and try it out:

```javascript
var queue = [];

//use a list as a queue
queue.push('apple');
queue.push('pear');
queue.push('mango');

//all the items is attached to the back of the list
console.log(queue);
//the first item are taken of the list
console.log(queue.shift());
//only pear and mango will be on the list
console.log(queue);
//what will this print?
console.log(queue.shift());
//which items will remain on the list/queue?
```

**Try this**

Create your own `Queue` Object (constructor function) that wraps a JavaScript list object. It should have to two methods `enqueue` and `dequeue`. The `enqueue` method should put an item unto the queue. And the `dequeue` method should remove and return the item in front of the queue. Your object should have a `length` function that returns the length our the queue.

## Stack

A Stack is Last in First Out(LIFO) linear data structure.

The undo command in a text editor is a good example of using a Stack in real life. If you press undo the last thing you did is undone. If you keep on going the last thing that will be undone will be the first change you made to the text document.

You can use a JavaScript list to create a simple Stack.

Look at this code and try it out:

```javascript
//use a list as a stack
var stack = [];
// push items on the stack
stack.push('apple');
stack.push('pear');
stack.push('mango');
// all the fruits are on the Stack
console.log(stack);
//printing 'mango'
console.log(stack.pop());
// only 'apples' and 'pears' remains
console.log(stack);
//what will this prints?
console.log(stack.pop());
```

> You can read more about Stacks & Queues [here](http://code.tutsplus.com/articles/data-structures-with-javascript-stack-and-queue--cms-23348)

## Graphs

Then there are graphs - data structure which links a node to one or more other nodes. Your Facebook friends are a prime example of a Graph data structure. A Graph data structure links you to your multitude of friends and them to their friends of which you can be one.

```javascript

// add Graph example

```

**Try this**

Use a Graph to show which product is in which category.

## Trees

A Tree is a graph with stricter rules, it only allows one path between two nodes.

Learn more about Trees [here](https://www.youtube.com/watch?v=mFptHjTT3l8)

You can read [here](http://freefeast.info/difference-between/difference-between-trees-and-graphs-trees-vs-graphs/) how a Graphs and Trees are different.

## When is it usefull?

Which of the data structures best represent the row of customers waiting to be served at your local bank?

> TODO - think of more everyday examples of Queues, Stacks, Graphs and Trees.
