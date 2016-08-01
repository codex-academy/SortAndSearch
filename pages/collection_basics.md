---
layout: default
title: Index
unitstandard: 115373-SO1-AC2
---

# Collection basics

## Arrays

An [Array](https://www.youtube.com/watch?v=7EdaoE46BTI) is a variable that can store more than one variable under the same name. In it's purest form it is a continuous memory block storing variables sequentially. Each variable in an Array is accessible using an index number. They are a linear lists with a fixed number of spaces available for variables.

JavaScript Arrays [are not Arrays](https://javascriptweblog.wordpress.com/2010/07/12/understanding-javascript-arrays/) in the pure sense of the word as they are auto extending.

You can create an Array like this:

```javascript
// Create an empty `Array` with 5 slots for values
var players = new Array(5);

// See the empty Array
console.log(players);

// Populate the Array like this
player[0] = "David Beckman";
player[1] = "Ryan Geeks";

// see the values in the Array using indexes
console.log(players[0]);
console.log(players[1]);
```

JavaScript Arrays allow this to happen:

```javascript

// Add a 6th element to the Array with only 5 allocated places
player[5] = "Thierry Hungry";

// What happened here?
console.log(player[5]);

// We can even do funny thing like adding a 9th element
player[8] = "Wayne Rooky";

```

When adding new values to a JavaScript Array it auto-extends.  In programming languages with pure Arrays they don't auto-extend. You can only add as many values into an Array as allocated at Array initialization time. To extend an Array you would have to create a new, bigger, Array and then copy the values over to the new Array. In JavaScript this is not the case, Lists in JavaScript are Array-like, but not pure Arrays. Something to bear in mind in your journey ahead as a programmer.

Arrays and Objects are fundamental building blocks for creating other data structures.

## Linked List

A [Linked List](https://en.wikipedia.org/wiki/Linked_list) is an ordered set of data nodes, each node containing data and a link to the next node (and sometimes to the previous node).

**Does this sounds familiar?**

This is what you did in the previous section. You created a `Node` Object and then use it to create a list of inter-connected `Node` objects resulting in a list. It is cumbersome to use though: we can fix this by using a LinkedList object.

## A usable Linked List

As is hard to use the `Node` Object on it's own we need to create a `LinkedList` object that is easier to use.

Use TDD to create a LinkedList object that have:

* an `add` function that adds an item to the list;
* a `length` function that returns the number of items in the list;
* a `next` function that returns the next item in the list, which can be used for looping over the list. It should return null if the end of the list is reached;
* a `first` function that returns the first item in the list;
* a `last` function that returns the last item in the list.

Now add this:

* a `find` function that finds all items in a list that matches a given condition. It should take in a function as a parameter. This function will take in the current Node and will return true/false if the condition is met.

Use your **LinkedList** object to and create a list of Categories and Product names for Nelisa.
