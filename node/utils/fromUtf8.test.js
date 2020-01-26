"use strict";
exports.__esModule = true;
var fromUtf8_1 = require("./fromUtf8");
var fixtures = [
    {
        utf8: '',
        array: []
    },
    {
        utf8: 'Foo © bar 𝌆 baz ☃ qux',
        array: [0x46, 0x6F, 0x6F, 0x20, 0xC2, 0xA9, 0x20, 0x62, 0x61, 0x72, 0x20, 0xF0, 0x9D, 0x8C, 0x86, 0x20, 0x62, 0x61, 0x7A, 0x20, 0xE2, 0x98, 0x83, 0x20, 0x71, 0x75, 0x78]
    }
];
fixtures.forEach(function (fixture) {
    test("fixture: \"" + fixture.utf8 + "\"", function () {
        var uint8Array = new Uint8Array(fixture.array);
        expect(fromUtf8_1.fromUtf8(fixture.utf8)).toStrictEqual(uint8Array);
    });
});
