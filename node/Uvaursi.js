"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
exports.__esModule = true;
var utils = __importStar(require("./utils"));
var Uvaursi = /** @class */ (function () {
    function Uvaursi(uint8Array) {
        this.uint8Array = uint8Array;
    }
    Uvaursi.prototype.toHex = function () {
        if (this.hex) {
            return this.hex;
        }
        this.hex = utils.toHex(this.uint8Array);
        return this.hex;
    };
    Uvaursi.prototype.toPhex = function () {
        if (this.phex) {
            return this.phex;
        }
        this.phex = utils.toPhex(this.uint8Array);
        return this.phex;
    };
    Uvaursi.prototype.genClone = function () {
        return new Uvaursi(this.uint8Array.slice());
    };
    Uvaursi.prototype.genPaddedLeft = function (length) {
        return new Uvaursi(utils.genPaddedLeft(length, this.uint8Array));
    };
    Uvaursi.prototype.genPaddedRight = function (length) {
        return new Uvaursi(utils.genPaddedRight(length, this.uint8Array));
    };
    Uvaursi.prototype.getIsEqual = function (uvaursi) {
        return utils.getIsEqual(this.uint8Array, uvaursi.uint8Array);
    };
    Uvaursi.fromArray = function (array) {
        return new Uvaursi(utils.fromArray(array));
    };
    Uvaursi.fromHexish = function (hexish) {
        return new Uvaursi(utils.fromHexish(hexish));
    };
    Uvaursi.genRandom = function (length) {
        return new Uvaursi(utils.genRandom(length));
    };
    Uvaursi.genConcat = function (uvaursis) {
        var uint8Arrays = uvaursis.map(function (uvaursi) {
            return uvaursi.uint8Array;
        });
        return new Uvaursi(utils.genConcat(uint8Arrays));
    };
    return Uvaursi;
}());
exports.Uvaursi = Uvaursi;
