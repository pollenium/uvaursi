"use strict";
exports.__esModule = true;
var fromUintNumber_1 = require("./fromUintNumber");
var params = [
    [0, [0]],
    [1, [1]],
    [255, [255]],
    [256, [1, 0]],
    [257, [1, 1]],
    [511, [1, 255]],
    [512, [2, 0]],
    [65535, [255, 255]],
    [65536, [1, 0, 0]],
    [65537, [1, 0, 1]]
];
var Fixture = /** @class */ (function () {
    function Fixture(number, array) {
        this.number = number;
        this.uint8Array = new Uint8Array(array);
    }
    return Fixture;
}());
var fixtures = [
    new Fixture(0, []),
    new Fixture(1, [1]),
    new Fixture(255, [255]),
    new Fixture(256, [1, 0]),
    new Fixture(257, [1, 1]),
    new Fixture(511, [1, 255]),
    new Fixture(512, [2, 0]),
    new Fixture(65535, [255, 255]),
    new Fixture(65536, [1, 0, 0]),
    new Fixture(65537, [1, 0, 1]),
];
fixtures.forEach(function (fixture) {
    test(fixture.number.toString(), function () {
        expect(fromUintNumber_1.fromUintNumber(fixture.number)).toStrictEqual(fixture.uint8Array);
    });
});
test('NegativeNumberError', function () {
    expect(function () {
        fromUintNumber_1.fromUintNumber(-1);
    }).toThrow(fromUintNumber_1.NegativeNumberError);
});
test('DecimalNumberError', function () {
    expect(function () {
        fromUintNumber_1.fromUintNumber(.5);
    }).toThrow(fromUintNumber_1.DecimalNumberError);
});
test('UnsafeNumberError', function () {
    expect(function () {
        fromUintNumber_1.fromUintNumber(Number.MAX_SAFE_INTEGER + 1);
    }).toThrow(fromUintNumber_1.UnsafeNumberError);
});
