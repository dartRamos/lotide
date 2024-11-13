const assertEqual = require("../assertEqual");
const tail = require("../tail")

// Test case: Check the tail of an array with multiple elements
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");

// Test case: Check the tail of an array with a single element
const single = ["Hello"];
const singleTail = tail(single);
assertEqual(singleTail.length, 0);

// Test case: Check the tail of an empty array
const empty = [];
const emptyTail = tail(empty);
assertEqual(emptyTail.length, 0);

// Test case: Check that the original array is not modified
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);