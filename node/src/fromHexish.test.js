"use strict";
exports.__esModule = true;
var fromHexish_1 = require("./fromHexish");
var Fixture = /** @class */ (function () {
    function Fixture(hexish, array) {
        this.hexish = hexish;
        this.array = array;
    }
    return Fixture;
}());
var fixtures = [
    new Fixture('', []),
    new Fixture('0x', []),
    new Fixture('0x0', [0]),
    new Fixture('0x00', [0]),
    new Fixture('ff', [255]),
    new Fixture('0xff', [255]),
    new Fixture('Ff', [255]),
    new Fixture('fF', [255]),
    new Fixture('FF', [255]),
    new Fixture('ff0', [255, 0]),
    new Fixture('0xff0', [255, 0])
];
fixtures.forEach(function (fixture) {
    expect(fromHexish_1.fromHexish(fixture.hexish)).toStictEqual(fixture.array);
});
