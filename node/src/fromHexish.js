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
function getIsValidHexish(hexish) {
    if (hexish.indexOf('0x') === 0) {
        return getIsValidHexish(hexish.substr(2));
    }
    for (var i = 0; i < hexish.length; i++) {
        if (!getIsValidHexishChar(hexish[i])) {
            return false;
        }
    }
    return true;
}
function assertIsValidHexish(hexish) {
    if (!getIsValidHexish(hexish)) {
        throw new InvalidHexishError(hexish);
    }
}
function fromHexish(hexish) {
    if (hexish.length === 0) {
        return new Uint8Array([]);
    }
    if (hexish.indexOf('0x') === 0) {
        return fromHexish(hexish.substr(2));
    }
    assertIsValidHexish(hexish);
    var array = hexish.match(/.{1,2}/g).map(function (byteHex) {
        return parseInt(byteHex, 16);
    });
    return new Uint8Array(array);
}
exports.fromHexish = fromHexish;
