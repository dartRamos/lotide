const assertEqual = require("../assertEqual")
const eqArrays = require("../eqArrays")

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays(["Bob"], ["Rob"]), false);
assertEqual(eqArrays(["java"], ["java"]), true);