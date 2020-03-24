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
test('genConcat', function () {
    var uu = Uu_1.Uu.genConcat([
        Uu_1.Uu.fromArray([0]),
        new Uint8Array([1]),
        new Uint8Array([]),
        Uu_1.Uu.fromArray([2])
    ]);
    expect(uu.toArray()).toStrictEqual([0, 1, 2]);
});
test('genFill', function () {
    var uu = Uu_1.Uu.genFill({ length: 4, fill: 7 });
    expect(uu.toArray()).toStrictEqual([7, 7, 7, 7]);
});
