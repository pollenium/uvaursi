"use strict";
exports.__esModule = true;
var concat_1 = require("./concat");
var Fixture = /** @class */ (function () {
    function Fixture(arrays, array) {
        this.arrays = arrays;
        this.uint8Arrays = arrays.map(function (array) {
            return new Uint8Array(array);
        });
        this.uint8Array = new Uint8Array(array);
    }
    return Fixture;
}());
var fixtures = [
    new Fixture([], []),
    new Fixture([[]], []),
    new Fixture([[], []], []),
    new Fixture([[1], [2, 3], [], [4]], [1, 2, 3, 4])
];
fixtures.forEach(function (fixture) {
    test(JSON.stringify(fixture.arrays), function () {
        expect(concat_1.concat(fixture.uint8Arrays)).toStrictEqual(fixture.uint8Array);
    });
});
