"use strict";
exports.__esModule = true;
var Uu_1 = require("./Uu");
test('fromHexish/unwrap', function () {
    var uu = Uu_1.Uu.fromHexish('0xFf');
    expect(uu.unwrap()).toBeInstanceOf(Uint8Array);
    expect(uu.unwrap()).toBeInstanceOf(Uint8Array);
});
test('wrap/toHex', function () {
    var uu = Uu_1.Uu.wrap(new Uint8Array([255]));
    expect(uu.toHex()).toBe('ff');
});
