"use strict";
exports.__esModule = true;
var toHex_1 = require("./toHex");
var Fixture = /** @class */ (function () {
    function Fixture(array, hex) {
        this.hex = hex;
        this.uint8Array = new Uint8Array(array);
    }
    return Fixture;
}());
var fixtures = [
    new Fixture([], ''),
    new Fixture([0], '00'),
    new Fixture([1], '01'),
    new Fixture([255], 'ff'),
    new Fixture([255], 'ff'),
    new Fixture([1, 1], '0101'),
];
fixtures.forEach(function (fixture) {
    test(fixture.hex, function () {
        expect(toHex_1.toHex(fixture.uint8Array)).toStrictEqual(fixture.hex);
    });
});
