const assert = require("chai").assert;
const tail = require("../tail")

describe("#tail", () => {
    it("returns the tail of an array with multiple elements", () => {
        const result = tail(['Hello', 'Lighthouse', 'Labs']);
        assert.strictEqual(result.length, 2);
        assert.strictEqual(result[0], 'Lighthouse');
        assert.strictEqual(result[1], 'Labs');
    });
    it("returns the one item in a the array", () => {
        const single = ['Hello'];
        const singleTail = tail(single);
        assert.strictEqual(singleTail.length, 0);
    });
    it("returns empty array", () => {
        const empty = [];
        const emptyTail = tail(empty);
        assert.strictEqual(emptyTail.length, 0);
    });
    it('makes sure array isnt modified', () => {
        const words = ['Yo Yo', 'Lighthouse', 'Labs'];
        tail(words);
        assert.strictEqual(words.length, 3);
    })
})



// Test case: Check the tail of an array with multiple elements
// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2);
// assertEqual(result[0], "Lighthouse");
// assertEqual(result[1], "Labs");

// Test case: Check the tail of an array with a single element
// const single = ["Hello"];
// const singleTail = tail(single);
// assertEqual(singleTail.length, 0);

// Test case: Check the tail of an empty array
// const empty = [];
// const emptyTail = tail(empty);
// assertEqual(emptyTail.length, 0);

// Test case: Check that the original array is not modified
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words);
// assertEqual(words.length, 3);