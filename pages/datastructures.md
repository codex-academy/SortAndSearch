---
layout: default
title: Index
unitstandard: 115373-SO1-AC1

---

# Data Structures

Data and how data is structured is a major part of programming. We spend a lot of time formatting and structuring data to solve problems and come up with solutions to problems and answers to questions.

There are some specific data structures that the industry came up with that solve certain recurring challenges. We will be looking at a few of those. They include Queues, Stacks, Graphs, and Trees.

## Queue

A Queue is a First in First Out (FIFO) linear data structure.

In everyday life queues are common. We routinely wait for our turn at the cash machine or at the supermarket. People can only join the queue from the back and the person in front of the queue is helped first.

In programming queues are also widely used and the [Event Loop](https://www.youtube.com/watch?v=8aGhZQkoFbQ) in JavaScript is a prime example of one. It is used to schedule the execution order of events in JavaScript.

You can create a simple Queue using a JavaScript list. Try out this code:

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

Create your own `Queue` Object (constructor function) that wraps a JavaScript list object. It should have two methods: `enqueue` and `dequeue`. The `enqueue` method should put an item onto the queue. The `dequeue` method should remove and return the item in front of the queue. Your object should have a `length` function that returns the length of the queue.

## Stack

A Stack is Last in First Out(LIFO) linear data structure.

The undo command in a text editor is a good example of using a Stack in real life. If you press undo the last thing you did is undone. If you keep going, the last thing that will be undone will be the first change you made to the text document.

You can use a JavaScript list to create a simple Stack.

Try out this code:

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

You can read more about Stacks and Queues in  [Data Structures With JavaScript: Stack and Queue](http://code.tutsplus.com/articles/data-structures-with-javascript-stack-and-queue--cms-23348) on the tuts+ website.

## Graphs

Then there are Graphs: a data structure which links a node to one or more nodes. Your Facebook friends are a prime example of a Graph data structure. A Graph data structure links you to your multitude of friends and them to their friends,  of which you can be one.

```javascript

// add Graph example

```

**Try this**

Use a Graph to show which product is in which category.

## Trees

A Tree is a graph with stricter rules: it only allows one path between two nodes.

Learn more about Trees [in this video](https://www.youtube.com/watch?v=mFptHjTT3l8)

You can read omre about [the difference between Trees and Graphs](http://freefeast.info/difference-between/difference-between-trees-and-graphs-trees-vs-graphs/).

## When is it useful?

Which of the data structures best represent the row of customers waiting to be served at your local bank?

> TODO - think of more everyday examples of Queues, Stacks, Graphs and Trees.
