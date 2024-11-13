const assertEqual = require("../assertEqual")
const head = require("../head")

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["Lighthouse", 5, "Lighthouse"]), 5);
assertEqual(head([6, 7, 8]), head([6, 7, 8]));