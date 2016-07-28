---
layout: default
title: Index
unitstandard: 115373-SO2-AC1, 115373-SO2-AC2, 115373-SO2-AC3
---

# Sorting

Sorting a list in JavaScript is as easy as calling the `sort` function. You can specify how it should be sorted by passing in a command function. What is it doing behind the scenes, though?

A basic sort function might compare each value in a list with each other and then swap the values around until there are no more values to be swapped.

# Sorting algorithms

There are different sorting algorithms. An algorithm is a set of steps to achieve a certain goal or outcome. Some sorting algorithms are more efficient than others: they take less steps to complete sorting the data. The steps are how many times the algorithm needs to inspect the data to make sure the data is sorted.

## Selection sort

Selection sort is like finding the most popular or least popular product for Nelisa. You don’t stop once you find the smallest/largest product, though: you keep going until you ordered all the values in the list.

Learn more about Selection sort [in this video](https://www.youtube.com/watch?v=f8hXR_Hvybo). Do you see the similarity to finding products for Nelisa?

## Bubble sort

When doing a Bubble sort the biggest or smallest number bubbles towards the end of the list. It's comparing each item in a list to the item next to it, and swapping the items around if needed. When there are no more items to swap the list is sorted.

Learn more about Bubble sort [in this video](https://www.youtube.com/watch?v=Ui97-_n5xjo).

**Todo:**

Add sorting support to your LinkedList class. Be sure that you can sort ascending or descending.

What do you notice about how sort algorithms are named?

## Curious about more sort algorithms?

Here are two more.

Take a look at this video to see [how Insertion sort works](https://www.youtube.com/watch?v=DFG-XuyPYUQ).

[Here's a video](https://www.youtube.com/watch?v=f8hXR_Hvybo) about how the efficient Merge sort algorithm works.


## What makes sorting hard?

When you looked at the different sorting algorithm what did you notice? Maybe you realized that some of them are easier to understand than other algorithms. Selection sort is using an algorithm like linear search. That searches through the list of values for the biggest or smallest value then move it to a separate list.

It keep on doing that until all the values in the list has been sorted. The problem with this approach that a lot of steps is required to sort a list of values. [BigO notation](https://justin.abrah.ms/computer-science/big-o-notation-explained.html) is the term for the number of iterations or complexity a Algorithm might need to complete.

Some sorting algorithms works better than others based on the state of the dataset that is being sorted. Algorithms got no knowledge about the dataset to be sorted. As a result the algorithm might do unnecessary processing. Algorithms that performs well for an unordered list might perform badly on a list that is nearly sorted or the other way around. Look at these [sorting algorithm animations](https://www.toptal.com/developers/sorting-algorithms) to understand how different sorting algorithms performs.
