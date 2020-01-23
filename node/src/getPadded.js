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
var OverflowError = /** @class */ (function (_super) {
    __extends(OverflowError, _super);
    function OverflowError(length, uint8ArrayLength) {
        var _this = _super.call(this, "Overflow: Trying to put " + uint8ArrayLength + " length Uint8Array into " + length + " length Uint8Array") || this;
        Object.setPrototypeOf(_this, OverflowError.prototype);
        return _this;
    }
    return OverflowError;
}(Error));
exports.OverflowError = OverflowError;
function getPaddedLeft(length, unpadded) {
    if (length < unpadded.length) {
        throw new OverflowError(length, unpadded.length);
    }
    var padded = (new Uint8Array(length)).fill(0);
    padded.set(unpadded, length - unpadded.length);
    return padded;
}
exports.getPaddedLeft = getPaddedLeft;
function getPaddedRight(length, unpadded) {
    if (length < unpadded.length) {
        throw new OverflowError(length, unpadded.length);
    }
    var padded = (new Uint8Array(length)).fill(0);
    padded.set(unpadded);
    return padded;
}
exports.getPaddedRight = getPaddedRight;
