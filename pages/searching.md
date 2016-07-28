# Searching algorithms

## Introduction

Let’s play a guessing game. I will think of a number from 1 to 100. You guess a number and I tell you `too big`, `too small` or `yeah!`.

You can play [this exercise one Khan Academy](https://www.khanacademy.org/computing/computer-science/algorithms/intro-to-algorithms/a/a-guessing-game).


What would be the best algorithm for you to follow to guess the right number?

## Linear Search

Without knowing it you used a linear search algorithm to find Nelisa's most and least popular products.

To use it, you loop through a list and check if the current value matches your criteria. If it matches your criteria, return the value. If not, keep going.

Learn more about it [in this video](https://www.youtube.com/watch?v=vZWfKBdSgXI)

## Binary search

The binary search algorithm is more complicated, but much more efficient than doing a linear search. It uses a divide and conquer approach and requires a sorted dataset. It discards values in the target list and reduces the target list by half each time, until the value is found or not.

### Binary search explained

The most efficient way to play the number guessing game that we started this section with is to use binary search. Let's see why.

You think of a number between 1 and 100. I guess the number is 50. You say no the number is lower than 50. What did I learn?

Yes! That the number is less than 50 and there's no way it can be 71, 63, 82 or any number bigger than or equal to than 50. Only 49 options to go! Yay!

Now I guess 25. You say No it's bigger. Now I know it can't be 1, 17, 24 or any number less or equal to 25. I only have 25 options left to me. As you can see the list of possible numbers is getting halved each time.

I know now it's a number between 25 and 50. Next I guess 37. And bingo you say! The number you thought of was 37. Three guesses later and you worked out the number. Using a binary search algorithm I was able to find the number.

## Try this

Write a number guessing game which generates a random number in memory when it starts. It should prompt the user to enter a number and return either `Correct!`, `Too low!` or `Too high!`. Display a counter of how many guesses were made and display it before each new prompt to enter a number.

Once done with the above, automate the game so that the game itself guesses what random number was generated. Display the final number of guesses made by the program once the program guesses the right number.

Learn more about doing a Binary search by [watching this video](https://www.youtube.com/watch?v=5xlIPT1FRcA).
