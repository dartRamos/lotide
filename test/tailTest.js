const assert = require("chai").assert;
const tail = require("../tail")

describe("#tail", () => {
    it("returns 'Lighthouse' & 'Labs' for ['Hello', 'Lighthouse', 'Labs']", () => {
        assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
    });
    it("returns empty [] for ['Hello']", () => {
        assert.deepEqual(tail(['Hello']), []);
    });
    it("returns empty [] for []", () => {
        assert.deepEqual(tail([]), []);
    });
    it('returns "Yo Yo" "Lighthouse" "Labs" for ["Yo Yo", "Lighthouse", "Labs"]', () => {
        assert.deepEqual(tail["Yo Yo", "Lighthouse", "Labs"]);
    });
});

