---
layout: default
title: Index
unitstandard: 115373-SO1-AC2

---

# Collection basics

## Arrays

An [Array](https://www.youtube.com/watch?v=7EdaoE46BTI) is variable that can store more than one variable under the same name. In it's purest form it is a continuous memory block where a number of variables can be stored sequentially. Each variable in an Array is accessible using an index number. They are a linear lists with a fixed number of spaces available for variables.

JavaScript Arrays [are not	 Arrays](https://javascriptweblog.wordpress.com/2010/07/12/understanding-javascript-arrays/) in the purest sense of the word as the are auto extending.

One can create an Array like this:

```javascript
//create an empty `Array` with 5 slots for values
var players = new Array(5);

//See the empty Array
console.log(players);

//populate the Array like this
player[0] = "David Beckman";
player[1] = "Ryan Geeks";

// see the values in the Array using indexes
console.log(players[0]);
console.log(players[1]);
```

JavaScript Arrays allows this to happen:

```javascript

//Adding a 6th element to the Array with only 5 allocated places
player[5] = "Thierry Hungry";
//what happened here?
console.log(player[5]);

//I can even do funny thing like adding a 9th element
player[8] = "Wayne Rooky";

```

In JavaScript an Array auto extend when new values are added to them. In some other programming languages with traditional Arrays you can only add as many values into an Array as allocated at initialization time. To extend an Array then you would have to create a new bigger Array and then copy the values over to the Array. None of that in JavaScript so Lists in JavaScript is Array-like, but not pure Arrays, something to bare in mind for your journey ahead as a programmer.

Arrays are a fundamental building blocks for various other data structures, especially combined with Objects.

## Linked List

A [Linked List](https://en.wikipedia.org/wiki/Linked_list) is an ordered set of data nodes, each node containing data and a link to the next node (and sometimes to the previous node).

**Does this sounds familiar?**

This is exactly what we did in the previous section. We created a `Node` Object and then use it to create a list of inter-connected `Node` objects resulting in a list. It is very cumbersome to use though, we can fix this by using a LinkedList object.

## A usable Linked List

As is hard to use the `Node` Object on it's own we need to create a `LinkedList` object that is easier to use.

So go ahead and create a LinkedList object, that have:

* an `add` function that adds an item to the list
* a `length` function that returns the number of items in the list
* a `next` function that returns the next item in the list, which can be used for looping over the list. It should return null if the end of the list is reached
* a `first` function that returns the first item in the list
* a `last` function that returns the last item in the list

Do this using **TDD**

Now add this:

* a `find` function that find all items in a list that match a given condition. It should take in a function as a parameter, this function will take in the current Node. And it will return true/false if the condition is met.

Now use your newly created **LinkedList** object to and create a list of Categories and Product names for Nelisa.