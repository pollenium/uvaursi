"use strict";
exports.__esModule = true;
var toHex_1 = require("./toHex");
var fixtures = [
    {
        hexish: '',
        uint8Array: new Uint8Array([])
    },
    {
        hexish: '00',
        uint8Array: new Uint8Array([0])
    },
    {
        hexish: '01',
        uint8Array: new Uint8Array([1])
    },
    {
        hexish: 'ff',
        uint8Array: new Uint8Array([255])
    },
    {
        hexish: '0001',
        uint8Array: new Uint8Array([0, 1])
    },
    {
        hexish: 'ffff',
        uint8Array: new Uint8Array([255, 255])
    }
];
fixtures.forEach(function (fixture, index) {
    var hexish = fixture.hexish, uint8Array = fixture.uint8Array;
    test("toHex " + index + ": " + hexish, function () {
        expect(toHex_1.toHex(uint8Array)).toBe(hexish);
    });
});
