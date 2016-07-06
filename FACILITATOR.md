---
layout: default
title: Facilitator notes
---
# Facilitator notes

## Introduction

The [introduction](/pages/intro.html) section main learning outcomes are:

* Learn about using intermediary variables
* How to use an intermediary variable to swop entries in a list
* The last function is introducing to the basics of Bubble Sort

The concept that candidates will need to understand to swap two entries in a list is that you need to keep the value of the entry that is to be replaced by the other entry in the list in an intermediate variable.

For example if you would like to swap the first and the second entry in this list:

```javascript
var dataList = [547, 671, 481];
```

One will need to keep a copy of the second entry in the list:

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
Coders might need help to get to grips of how to use intermediate variables. Understanding this concept is a crucial skill for candidates to start creating and manipulating their own data structures.

## Node and pointers

The [Node and Pointers](/pages/nodes_and_pointers.html) sections main learning outcomes are:

* Introducing candidates to creating their own data structures.
* How candidates can use their existing knowledge of Objects in Javascript to do that.
* To give candidates practical experience of creating and using their own data structures.
* For candidates to start thinking about creating their own data structures.

## Collection basics

The [Collection basics](/pages/lists_vs_arrays.html) section main learning outcomes are:

* To introduce candidates to various different data structures.
* How these data structures are used by them on a day to day basis.
* How to implement and use these data structures.


## Sort algorithms

The [Sort algorithms](/pages/datastructures.html) section main learning outcomes are:

* To introduce candidates to various different sorting algorithms
* To assist candidates to implement at least two different sorting algorithms
* To help candidates to gain some insight into sort algorithm performance.

## Search algorithms

The [Search Algorithms](/pages/sorting.html) sections main learning outcomes are:

* To introduce the candidates to basic search algorithms
* For candidates to be able to compare various different search algorithms
* And for them to be able to createa their own basic search algorithms
