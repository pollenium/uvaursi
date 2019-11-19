"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var bn_js_1 = __importDefault(require("bn.js"));
var fromUintBn_1 = require("./fromUintBn");
var Fixture = /** @class */ (function () {
    function Fixture(number, array) {
        this.bn = new bn_js_1["default"](number);
        this.uint8Array = new Uint8Array(array);
    }
    return Fixture;
}());
var fixtures = [
    new Fixture(0, []),
    new Fixture(1, [1]),
    new Fixture(255, [255]),
    new Fixture(256, [1, 0]),
    new Fixture(257, [1, 1]),
    new Fixture(256 * 256, [1, 0, 0])
];
fixtures.forEach(function (fixture) {
    test(fixture.bn.toString(), function () {
        expect(fromUintBn_1.fromUintBn(fixture.bn)).toStrictEqual(fixture.uint8Array);
    });
});
test('NegativeBnError', function () {
    expect(function () {
        fromUintBn_1.fromUintBn(new bn_js_1["default"](-1));
    }).toThrow(fromUintBn_1.NegativeBnError);
});
