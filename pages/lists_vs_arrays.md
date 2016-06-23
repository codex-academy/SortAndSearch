---
layout: default
title: Index
unitstandard: 115373-SO1-AC2

---

# Collection basics

## Arrays

A variable that can store more than one variable under the same name.
Continuous memory blocks where a number of variables can be stored sequentially. Each variable is accessible using an index number. They are a linear lists with a fixed number of spaces available for variables.

Arrays are the building blocks for various other data structures.

## Linked List

A Linked List is an ordered set of data nodes, each node containing data and a link to the next node (and sometimes to the previous node).

You can use objects to create Linked Lists.

One can create a Node Object like this:

```javascript
	var ListNode = function(data, next){
		this.data = data;
		this.next = next;
	}
```

And then create a list of nodes like this:

```javascript

	var nodeThree = new ListNode(9, null);
	var nodeTwo = new ListNode(13, nodeThree);
	var nodeOne = new ListNode(7, nodeTwo);



```

The `next` variable points to the next node.

This way you can create a list of objects without using the built in List variable of Javascript.

**Try this**

* Create a LinkedList Object and create a List of Categories and Product names for Nelisa.

* Create a Stack Object that use a Linked List instead of a Javascript List.

How can you make it easier to create a Linked Lists?

// Create a set of Unit Tests
