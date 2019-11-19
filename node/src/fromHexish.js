"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var InvalidHexishError = /** @class */ (function (_super) {
    __extends(InvalidHexishError, _super);
    function InvalidHexishError(hexish) {
        var _this = _super.call(this, "Invalid hexish: " + hexish) || this;
        Object.setPrototypeOf(_this, InvalidHexishError.prototype);
        return _this;
    }
    return InvalidHexishError;
}(Error));
exports.InvalidHexishError = InvalidHexishError;
var hexishCharCodesRanges = [
    [48, 57],
    [97, 102],
    [65, 70] // A-F
];
function getIsValidHexishChar(hexishChar) {
    var hexishCharCode = hexishChar.charCodeAt(0);
    for (var i = 0; i < hexishCharCodesRanges.length; i++) {
        var start = hexishCharCodesRanges[i][0];
        var end = hexishCharCodesRanges[i][1];
        if (hexishCharCode >= start && hexishCharCode <= end) {
            return true;
        }
    }
    return false;
}
function getIsValidChoppedHexish(choppedHexish) {
    for (var i = 0; i < choppedHexish.length; i++) {
        if (!getIsValidHexishChar(choppedHexish[i])) {
            return false;
        }
    }
    return true;
}
function fromHexish(hexish) {
    var choppedHexish = hexish.indexOf('0x') === 0 ? hexish.substr(2) : hexish;
    if (choppedHexish.length === 0) {
        return new Uint8Array([]);
    }
    if (!getIsValidChoppedHexish(choppedHexish)) {
        throw new InvalidHexishError(hexish);
    }
    var array = choppedHexish.match(/.{1,2}/g).map(function (byteHex) {
        return parseInt(byteHex, 16);
    });
    return new Uint8Array(array);
}
exports.fromHexish = fromHexish;
