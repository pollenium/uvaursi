"use strict";
exports.__esModule = true;
var fromHexish_1 = require("./fromHexish");
var fixtures = [
    {
        hexish: '',
        u: new Uint8Array([])
    },
    {
        hexish: '0x',
        u: new Uint8Array([])
    },
    {
        hexish: '0x00',
        u: new Uint8Array([0])
    },
    {
        hexish: '0x01',
        u: new Uint8Array([1])
    },
    {
        hexish: '0xff',
        u: new Uint8Array([255])
    },
    {
        hexish: '0xfF',
        u: new Uint8Array([255])
    },
    {
        hexish: '0xFfFf',
        u: new Uint8Array([255, 255])
    },
    {
        hexish: '0x01FF',
        u: new Uint8Array([1, 255])
    }
];
fixtures.forEach(function (fixture, index) {
    var hexish = fixture.hexish, u = fixture.u;
    test("fromHexish " + index + ": " + hexish, function () {
        expect(fromHexish_1.fromHexish(hexish)).toStrictEqual(u);
    });
});
var invalidHexishChar = [
    '\x2F',
    '/',
    '\x3A',
    ':',
    '\x40',
    '@',
    '\x47',
    'G',
    '\x60',
    '`',
    '\x67',
    'g',
    '\n',
    '\x00',
    '\xff'
];
var validHexishChars = ['0', '9', 'a', 'f', 'A', 'F'];
invalidHexishChar.forEach(function (invalidHexishChar) {
    validHexishChars.forEach(function (validHexishChar) {
        var throwInvalidHexishCharErrors = [
            "" + validHexishChar + invalidHexishChar,
            "" + invalidHexishChar + validHexishChar,
            "" + validHexishChar + invalidHexishChar + validHexishChar + validHexishChar,
            "" + validHexishChar + validHexishChar + validHexishChar + invalidHexishChar,
            "" + invalidHexishChar + validHexishChar + validHexishChar + validHexishChar,
            "0x" + validHexishChar + invalidHexishChar,
            "0x" + invalidHexishChar + validHexishChar,
            "0x" + validHexishChar + validHexishChar + invalidHexishChar + validHexishChar,
            "0x" + validHexishChar + validHexishChar + validHexishChar + invalidHexishChar,
            "0x" + invalidHexishChar + validHexishChar + validHexishChar + validHexishChar
        ];
        var throwInvalidHexishParityErrors = [
            "" + validHexishChar,
            "" + validHexishChar + validHexishChar + validHexishChar,
            "0x" + validHexishChar,
            "0x" + validHexishChar + validHexishChar + validHexishChar,
        ];
        var validHexishes = [
            '',
            "" + validHexishChar + validHexishChar,
            "" + validHexishChar + validHexishChar + validHexishChar + validHexishChar,
            '0x',
            "0x" + validHexishChar + validHexishChar,
            "0x" + validHexishChar + validHexishChar + validHexishChar + validHexishChar
        ];
        throwInvalidHexishCharErrors.forEach(function (hexish) {
            test("invalidHexishChar: " + hexish, function () {
                expect(function () {
                    fromHexish_1.fromHexish(hexish);
                }).toThrow(fromHexish_1.InvalidHexishCharError);
            });
        });
        throwInvalidHexishParityErrors.forEach(function (hexish) {
            test("invalidHexishParity: " + hexish, function () {
                expect(function () {
                    fromHexish_1.fromHexish(hexish);
                }).toThrow(fromHexish_1.InvalidHexishParityError);
            });
        });
        validHexishes.forEach(function (hexish) {
            test("validHexish: " + hexish, function () {
                expect(function () {
                    fromHexish_1.fromHexish(hexish);
                }).not.toThrow();
            });
        });
    });
});
