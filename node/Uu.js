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
var Uu = /** @class */ (function () {
    function Uu(u) {
        this.u = u;
    }
    Uu.prototype.toHex = function () {
        if (this.hex) {
            return this.hex;
        }
        this.hex = utils.toHex(this.u);
        return this.hex;
    };
    Uu.prototype.toPhex = function () {
        if (this.phex) {
            return this.phex;
        }
        this.phex = utils.toPhex(this.u);
        return this.phex;
    };
    Uu.prototype.genClone = function () {
        return new Uu(this.u.slice());
    };
    Uu.prototype.genPaddedLeft = function (length) {
        return new Uu(utils.genPaddedLeft(length, this.u));
    };
    Uu.prototype.genPaddedRight = function (length) {
        return new Uu(utils.genPaddedRight(length, this.u));
    };
    Uu.prototype.getIsEqual = function (uish) {
        return utils.getIsEqual(this.u, utils.unwrap(uish));
    };
    Uu.prototype.unwrap = function () {
        return utils.unwrap(this);
    };
    Uu.fromArray = function (array) {
        return new Uu(utils.fromArray(array));
    };
    Uu.fromHexish = function (hexish) {
        return new Uu(utils.fromHexish(hexish));
    };
    Uu.genRandom = function (length) {
        return new Uu(utils.genRandom(length));
    };
    Uu.genConcat = function (uvaursis) {
        var us = uvaursis.map(function (uvaursi) {
            return utils.unwrap(us);
        });
        return new Uu(utils.genConcat(us));
    };
    Uu.wrap = function (uish) {
        if (uish instanceof Uint8Array) {
            return new Uu(uish);
        }
        if (uish.u) {
            return new Uu(uish.u);
        }
        throw new Error('Unable to wrap');
    };
    return Uu;
}());
exports.Uu = Uu;