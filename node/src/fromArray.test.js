"use strict";
exports.__esModule = true;
var fromArray_1 = require("./fromArray");
test('[0, 255]', function () {
    expect(fromArray_1.fromArray([0, 255])).toStrictEqual(new Uint8Array([0, 255]));
});
test('NegativeNumberError', function () {
    expect(function () {
        fromArray_1.fromArray([-1]);
    }).toThrow(fromArray_1.NegativeNumberError);
});
test('DecimalNumberError', function () {
    expect(function () {
        fromArray_1.fromArray([1.5]);
    }).toThrow(fromArray_1.DecimalNumberError);
});
test('TooLargeNumberError', function () {
    expect(function () {
        fromArray_1.fromArray([256]);
    }).toThrow(fromArray_1.TooLargeNumberError);
});
