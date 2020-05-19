"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var genSlice_1 = require("./genSlice");
var original = new Uint8Array([10, 11, 12, 13]);
var Fixture = /** @class */ (function () {
    function Fixture(u, start, length, expected) {
        this.start = start;
        this.length = length;
        this.u = new Uint8Array(u);
        this.expected = new Uint8Array(expected);
    }
    return Fixture;
}());
var fixtures = [
    new Fixture([], 0, 0, []),
    new Fixture([10], 0, 0, []),
    new Fixture([10], 0, 1, [10]),
    new Fixture([10, 11, 12], 0, 0, []),
    new Fixture([10, 11, 12], 0, 1, [10]),
    new Fixture([10, 11, 12], 0, 2, [10, 11]),
    new Fixture([10, 11, 12], 0, 3, [10, 11, 12]),
    new Fixture([10, 11, 12], 1, 0, []),
    new Fixture([10, 11, 12], 1, 1, [11]),
    new Fixture([10, 11, 12], 1, 2, [11, 12])
];
fixtures.forEach(function (fixture) {
    test(JSON.stringify(fixture), function () {
        expect(genSlice_1.genSlice(__assign({}, fixture))).toStrictEqual(fixture.expected);
    });
});
var errorFixtures = [
    new Fixture([10], -1, 0, []),
    new Fixture([10], 0, -1, []),
    new Fixture([10], .5, 0, []),
    new Fixture([10], 0, .5, []),
    new Fixture([10], 1, 1, []),
];
errorFixtures.forEach(function (fixture) {
    test(JSON.stringify(fixture), function () {
        expect.assertions(1);
        try {
            genSlice_1.genSlice(__assign({}, fixture));
        }
        catch (error) {
            expect(error).toBeInstanceOf(genSlice_1.InvalidSliceRangeError);
        }
    });
});
