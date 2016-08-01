---
layout: default
title: Facilitator notes
---

# Facilitator notes

## Introduction

The [introduction](/pages/intro.html) section's main learning outcomes are:

* How to use intermediary variables to move data entries in a data structure;
* How to use an intermediary variable to swap entries in a list;
* Introduction to the basics of Bubble Sort.

The concept that candidates will need to understand to swap two entries in a list is that you need to keep the value of the entry that is to be replaced by the other entry in the list in an intermediate variable.

For example if you would like to swap the first and the second entry in this list:

```javascript
var dataList = [547, 671, 481];
```

You will need to keep a copy of the second entry in the list:

```javascript
var rememberThis = dataList[1];
//now replaced
dataList[1] = dataList[0];
//now the List looks like this [547, 547, 481]
```

To use the copy the variable to complete the operation:

```javascript
dataList[0] = rememberThis;
//after this step the list will look like this
// [671, 547, 481]
```
Coders might need help to get to grips with how to use intermediate variables. Understanding this concept is a crucial skill for candidates to start creating and manipulating their own data structures.

## Node and pointers

The [Node and Pointers](/pages/nodes_and_pointers.html) section's main learning outcomes are:

* Introducing candidates to creating their own data structures;
* Using their existing knowledge of Objects in JavaScript to do that;
* Practical experience of creating and using their own data structures;
* Thinking about creating their own data structures.

## Collection basics

The [Collection basics](/pages/collection_basics.html) section's main learning outcomes are:
* Introducing candidates to pure Arrays;
* comparing list with Arrays;
* and letting candidates create a Linked List

## Data structures

The [Data structures](/pages/datastructures.html) section's main learning outcomes are:

* To introduce candidates to different data structures;
* How these data structures are used by them on a day to day basis;
* How to implement and use these data structures.

## Sort algorithms

The [Sort algorithms](/pages/sorting.html) section's main learning outcomes are:

* To introduce candidates to different sorting algorithms;
* To help candidates implement at least two different sorting algorithms;
* To help candidates gain some insight into sort algorithm performance.

## Search algorithms

The [Search Algorithms](/pages/searching.html) section's main learning outcomes are:

* To introduce the candidates to basic search algorithms;
* For candidates to be able to compare different search algorithms;
* For candidates to be able to create their own basic search algorithms.
