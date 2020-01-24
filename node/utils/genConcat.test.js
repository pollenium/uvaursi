"use strict";
exports.__esModule = true;
var genConcat_1 = require("./genConcat");
var Fixture = /** @class */ (function () {
    function Fixture(arrays, array) {
        this.arrays = arrays;
        this.us = arrays.map(function (array) {
            return new Uint8Array(array);
        });
        this.u = new Uint8Array(array);
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
        expect(genConcat_1.genConcat(fixture.us)).toStrictEqual(fixture.u);
    });
});
