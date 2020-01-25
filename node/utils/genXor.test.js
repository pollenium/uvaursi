"use strict";
exports.__esModule = true;
var genXor_1 = require("./genXor");
test('genXor', function () {
    var a = new Uint8Array([0x01, 0x02, 0xf0, 0xff]);
    var b = new Uint8Array([0x33, 0x46, 0x22, 0xaa]);
    var xor = new Uint8Array([0x32, 0x44, 0xD2, 0x55]);
    expect(genXor_1.genXor(a, b)).toStrictEqual(xor);
});
