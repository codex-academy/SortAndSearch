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

You can create a simple Queue using a JavaScript list.

Look at this code and try it out:

```javascript
var queue = [];

// Use a list as a queue
queue.push('apple');
queue.push('pear');
queue.push('mango');

// All the items is attached to the back of the list
console.log(queue);
// The first item are taken of the list
console.log(queue.shift());
// Only pear and mango will be on the list
console.log(queue);
// What will this print?
console.log(queue.shift());
// Which items will remain on the list/queue?
```

**Try this**

Create your own `Queue` Object (constructor function) that wraps a JavaScript list object. It should have to two methods `enqueue` and `dequeue`. The `enqueue` method should put an item unto the queue. And the `dequeue` method should remove and return the item in front of the queue. Your object should have a `length` function that returns the length our the queue.

**Next** Create a `Queue` Object like the object above, but one that is **not** using a JavaScript list object internally. Use `Node` objects like the ones you used to create a Linked List earlier.

## Stack

A Stack is Last in First Out(LIFO) linear data structure.

The undo command in a text editor is a good example of using a Stack in real life. If you press undo the last thing you did is undone. If you keep going, the last thing that will be undone will be the first change you made to the text document.

You can use a JavaScript list to create a simple Stack.

Try out this code:

```javascript
// Use a list as a stack
var stack = [];
// Push items on the stack
stack.push('apple');
stack.push('pear');
stack.push('mango');
// All the fruits are on the Stack
console.log(stack);
// Printing 'mango'
console.log(stack.pop());
// Only 'apples' and 'pears' remains
console.log(stack);
// What will this prints?
console.log(stack.pop());
```

You can read more about Stacks and Queues in  [Data Structures With JavaScript: Stack and Queue](http://code.tutsplus.com/articles/data-structures-with-javascript-stack-and-queue--cms-23348) on the tuts+ website.

**Do this:** Create a `Stack` Object that is using `Node` objects. The Stack object should have a `push` and `pop` method and a `depth` property. The `push` method should add an item to the stack. The `pop` method should return and remove the item that was added to the Stack last. The `depth` property should keep a count of the number of items on the Stack.

## Useful links

Tutsplus got a interesting series on [data structures using JavaScript](http://code.tutsplus.com/series/data-structures-in-javascript--cms-772)

Here is [another series](http://blog.benoitvallon.com/data-structures-in-javascript/data-structures-in-javascript/) on data structures using JavaScript.

## When is it useful?

Which data structures best represent the row of customers waiting at your local bank?

> Can you think of more everyday examples of Queues, Stacks, Graphs and Trees.
