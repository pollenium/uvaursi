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
var NegativeNumberError = /** @class */ (function (_super) {
    __extends(NegativeNumberError, _super);
    function NegativeNumberError(number) {
        var _this = _super.call(this, "Negative number: " + number) || this;
        Object.setPrototypeOf(_this, NegativeNumberError.prototype);
        return _this;
    }
    return NegativeNumberError;
}(Error));
exports.NegativeNumberError = NegativeNumberError;
var DecimalNumberError = /** @class */ (function (_super) {
    __extends(DecimalNumberError, _super);
    function DecimalNumberError(number) {
        var _this = _super.call(this, "Decimal number: " + number) || this;
        Object.setPrototypeOf(_this, DecimalNumberError.prototype);
        return _this;
    }
    return DecimalNumberError;
}(Error));
exports.DecimalNumberError = DecimalNumberError;
var UnsafeNumberError = /** @class */ (function (_super) {
    __extends(UnsafeNumberError, _super);
    function UnsafeNumberError(number) {
        var _this = _super.call(this, "Unsafe number: " + number + " is greater than Number.MAX_SAFE_INTEGER") || this;
        Object.setPrototypeOf(_this, UnsafeNumberError.prototype);
        return _this;
    }
    return UnsafeNumberError;
}(Error));
exports.UnsafeNumberError = UnsafeNumberError;
function encodeToArray(array, uintNumber) {
    array.unshift(uintNumber % 256);
    if (uintNumber >= 256) {
        encodeToArray(array, Math.floor(uintNumber / 256));
    }
    return array;
}
function fromUintNumber(uintNumber) {
    if (uintNumber < 0) {
        throw new NegativeNumberError(uintNumber);
    }
    if (uintNumber % 1 > 0) {
        throw new DecimalNumberError(uintNumber);
    }
    if (uintNumber > Number.MAX_SAFE_INTEGER) {
        throw new UnsafeNumberError(uintNumber);
    }
    if (uintNumber === 0) {
        return new Uint8Array(0);
    }
    return new Uint8Array(encodeToArray([], uintNumber));
}
exports.fromUintNumber = fromUintNumber;
