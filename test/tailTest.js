const assertEqual = require("../assertEqual");
const tail = require("../tail")

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");

const single = ["Hello"];
const singleTail = tail(single);
assertEqual(singleTail.length, 0);

const empty = [];
const emptyTail = tail(empty);
assertEqual(emptyTail.length, 0);

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);