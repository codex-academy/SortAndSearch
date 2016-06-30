---
layout: default
title: Index
---

# Introduction

We will be working with Data Structures extensively in this section. We will use JavaScript Arrays, which is rather a List than an Array, a lot. You will discover why a JavaScript Array is not really an Array in the truest sense of the word. You will also learn how to create your own Data Structures in JavaScript. Soon you will be creating and sorting your own Lists in JavaScript.

## Let’s do a few warming up exercises.

Write code and unit tests for the functions below.

### Swap first two

Create a function that takes a list as a parameter and swap the first entry in the list with the second entry in the list and returns the resulting list.

Given a list :

```javascript
['apple', 'pear', 'mango', 'banana']
```

It should return :

```javascript
['pear', 'apple', 'mango', 'banana'];
```

### Swap first and last

Create a function that takes a list as a parameter and swap the first entry in the list with the last entry in the list and returns the resulting list.

Given a list :

```javascript
['apple', 'pear', 'mango', 'banana']
```    

It should return :

```javascript
['banana', 'apple', 'mango', 'apple']
```    

### Know they neighbour

Create function a that takes a list of numbers it should loop through the numbers and compare each number with it’s neighbour to the right. If a number is bigger than it’s neighbour on the right, it should swop with it’s neighbour. The function should return the new list. What is the result of this function? Where does the biggest number ends up?

Use this data :

```javascript
    [5, 19, 7, 17, 6, 1, 3]
```

**Insights:**

* What did you learn from writing these functions?
* What was hard?
* What did you struggle with?
* What was useful?

## Facilitator notes

The main learning outcome of these exercises are:
Learn about using intermediary variables
How to use an intermediary variable to swop entries in a list
The last function is introducing to the basics of Bubble Sort

To swop entries in a list one needs to entries value to be replaced by another value in the list in an intermediate variable.

Coders might need help to get to grips of how to use intermediate variables.
