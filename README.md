# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @ramosd/lotide`

**Require it:**

`const _ = require('@ramosd/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `head(array)`: Returns the first element of the array.
- `tail(array)`: Returns a new array without the first element.
- `middle(array)`: Returns the middle element(s) of an array. For even-length arrays, it returns the two middle elements.
- `assertEqual(actual, expected)`: Compares two primitive values and prints a message indicating whether they are equal.
- `assertArraysEqual(actual, expected)`: Compares two arrays and prints a message indicating whether they are equal.
- `assertObjectsEqual(actual, expected)`: Compares two objects and prints a message indicating whether they are equal.
- `countLetters(string)`: Returns an object with the count of each letter in a string.
- `countOnly(allItems, itemsToCount)`: Counts how many times specified items appear in an array.
- `eqArrays(arr1, arr2)`: Compares two arrays for equality.
- `findKey(object, callback)`: Finds the first key in an object that satisfies the given callback function.
- `findKeyByValue(object, value)`: Finds the first key in an object that contains the specified value.
- `flatten(array)`: Flattens a nested array into a single array.
- `letterPositions(string)`: Returns an object with the positions (indices) of each character in the string.
- `map(array, callback)`: Creates a new array based on applying the callback function to each element in the original array.
- `takeUntil(array, callback)`: Returns a slice of the array starting from the beginning until the callback function returns a truthy value.
- `without(array, itemsToRemove)`: Returns a new array excluding any elements that are in the `itemsToRemove` array.