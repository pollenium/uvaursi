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
var TooLargeNumberError = /** @class */ (function (_super) {
    __extends(TooLargeNumberError, _super);
    function TooLargeNumberError(number) {
        var _this = _super.call(this, "Too large number: " + number + " is greater than 255") || this;
        Object.setPrototypeOf(_this, TooLargeNumberError.prototype);
        return _this;
    }
    return TooLargeNumberError;
}(Error));
exports.TooLargeNumberError = TooLargeNumberError;
function fromArray(array) {
    array.forEach(function (number) {
        if (number < 0) {
            throw new NegativeNumberError(number);
        }
        if (number % 1 > 0) {
            throw new DecimalNumberError(number);
        }
        if (number > 255) {
            throw new TooLargeNumberError(number);
        }
    });
    return new Uint8Array(array);
}
exports.fromArray = fromArray;
