"use strict";
exports.__esModule = true;
var toHex_1 = require("./toHex");
var fixtures = [
    {
        hexish: '',
        u: new Uint8Array([])
    },
    {
        hexish: '00',
        u: new Uint8Array([0])
    },
    {
        hexish: '01',
        u: new Uint8Array([1])
    },
    {
        hexish: 'ff',
        u: new Uint8Array([255])
    },
    {
        hexish: '0001',
        u: new Uint8Array([0, 1])
    },
    {
        hexish: 'ffff',
        u: new Uint8Array([255, 255])
    }
];
fixtures.forEach(function (fixture, index) {
    var hexish = fixture.hexish, u = fixture.u;
    test("toHex " + index + ": " + hexish, function () {
        expect(toHex_1.toHex(u)).toBe(hexish);
    });
});
