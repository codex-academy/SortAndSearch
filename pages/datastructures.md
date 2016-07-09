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

In programming queues are also widely used and the [Event Loop](https://www.youtube.com/watch?v=8aGhZQkoFbQ) in Javascript is a prime example of one. It is used to schedule the execution order of events in Javascript.

You can easily create a simple Queue using a Javascript list.

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

Create your own `Queue` Object (constructor function) that wraps a Javascript list object. It should have to two methods `enqueue` and `dequeue`. The `enqueue` method should put an item unto the queue. And the `dequeue` method should remove and return the item in front of the queue. Your object should have a `length` function that returns the length our the queue.

## Stack

A Stack is Last in First Out(LIFO) linear data structure.

The undo command in a text editor is a good example of using a Stack in real life. If you press undo the last thing you did is undone. If you keep on going the last thing that will be undone will be the first change you made to the text document.

You can use a Javascript list to create a simple Stack.

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

## Trees

A Tree is a data structure that is used to store data hierarchically. Trees are a widely used data structure one the web today. In fact all web browsers DOM (Document Object Model) is a Tree data structure. Which HTML elements containing other HTML elements with elements in them and so forth.

Learn more about Trees [here](https://www.youtube.com/watch?v=mFptHjTT3l8)

**A special tree**

We will be looking at a special type of tree called called a Binary Search Tree (BST) which is a very efficient way to structure data to be able to easily search through it.

Work you way through this [tutorial](http://bst.projectcodex.co) to understand Binary Search Trees.

You can read [here](http://freefeast.info/difference-between/difference-between-trees-and-graphs-trees-vs-graphs/) how Graphs and Trees are different.


## Graphs

A graph data structure is good for modeling networks, it models collections of nodes are inter connected well. Your Facebook friends are a prime example of a network that is a Graph data structure. A Graph data structure links you to your multitude of friends and them to their friends of which you can be one. It can be used to find all your friends and friends of your friends. You can run a query on it to find out if you have any friends or a friend of a friend that is called 'Xola' for instance.

It can also be used to model routes between destinations and be used to determine which route between two destinations are the shortest.

Each Node in a Graph is called a Vertex and the links between Vertex's are called an Edge. Vertices are linked to each other using edges. Edges are a combination of two Vertices. In a directional Graph the direction of the link between two vertices are indicated. An example of this is on a social network like Twitter where users can follow each other, if one User A is following User B the direction of the vertices is from directed from User A to User B.

Edges can also have a weight, which is useful to put a value on a connection between two vertices - this is very useful in a graph that models the distances between various different towns.

To model a Graph we will be using and adjacency list. The adjacency list is an list of keys each one which have a list of vertices that it is connected to.

Let's look a social network example again. Say Joe is friends with Xola, Jane and Jabu. Jabu is friends with Jane, Xola and Andy. Andy is friends with Bob, Sammy and Xola.

In this example each Person/User is a vertex and the friendship between them is an Edge.

```javascript

// add Graph example
var Person = function(name){
    this.name = name;
};

var SocialNetwork = function(){
    var members = [];
    var friendships = {};

    this.join = function(person){
        members.push(person);
    };

    this.befriend = function(member, friend){
        //    
        friendships[member].push(friend);
    };
};

```

## Usefull links

Tutsplus got a interesting series on [data structures uding Javascript](http://code.tutsplus.com/series/data-structures-in-javascript--cms-772)

Here is [another series](http://blog.benoitvallon.com/data-structures-in-javascript/data-structures-in-javascript/) on data structures using Javascript.

## When is it useful?

Which of the data structures best represent the row of customers waiting to be served at your local bank?

> TODO - think of more everyday examples of Queues, Stacks, Graphs and Trees.
