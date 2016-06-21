---
layout: default
title: Index
unitstandard: 115373-SO3-AC1, 115373-SO3-AC2
---

# Searching algorithms

## Introduction

Let’s play a guessing game I will think of a number or equal than 100. You guess a number and I tell you `too big`, `too small` or `yeah!`.

What would be the best algorithm for you to follow to guess the right number?

## Linear Search

The linear search algorithm should be familiar to you as you probably used it to  found Nelisa's most and least popular products.

To use it you loop through a list and check if the the current value match your criteria. If it matches your criteria return the value if not keep going.

Learn more about it [here](https://www.youtube.com/watch?v=vZWfKBdSgXI)

## Binary search

The binary search algorithm is more complicated, but much more efficient than doing a linear search. It use a dived and conquer approach and requires the search list to be sorted. It discard values in the target list and reduce the Reduce the  target list by halve each time, until founds the value or not.

## Binary search explained

The most efficient way to play the number guessing game, we start this section with, is to use binary search. Let's see why.

Ok you think of a number less or equal to 100. I guess the number is 50. You say no the number is lower than 50. What did I learn?

Yes! That the number is less than 50 and there is no way it can be 71, 63, 82 or any number bigger or equal than 50. Only 49 options to go! Yipee!

So now I guess 25. You say No it's bigger. So Now I know it can't be 1, 17, 24 or any number less or equal to 25. Suddenly I only have 25 options left to me. As you can see the list of possible numbers is getting smaller.

I know now it's a number between 25 and 50. Next I guess 37. And bingo you say! The number you thought of was 37. Three guesses later and you worked out the number. Using a binary search algorithm I was able to easily found the number.

**Try this**

Write a number guessing console game which generates a random number in memory when it starts. Prompts the user to enter a number. And returns either `Correct!`, `Too low!` or `Too high!`, when the number entered is a match, too small or too high. Display a counter of how many guesses was made and display it before each new prompt to enter a number.

Learn more about doing a Binary search by looking at [this](https://www.youtube.com/watch?v=5xlIPT1FRcA).
