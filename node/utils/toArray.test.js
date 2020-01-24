"use strict";
exports.__esModule = true;
var toArray_1 = require("./toArray");
test('toArray', function () {
    var u = new Uint8Array([1, 255, 0]);
    expect(toArray_1.toArray(u)).toBeInstanceOf(Array);
    expect(toArray_1.toArray(u)).toStrictEqual([1, 255, 0]);
});
