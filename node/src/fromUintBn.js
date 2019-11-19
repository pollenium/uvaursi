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
var NegativeBnError = /** @class */ (function (_super) {
    __extends(NegativeBnError, _super);
    function NegativeBnError(bn) {
        var _this = _super.call(this, "Negative BN: " + bn) || this;
        Object.setPrototypeOf(_this, NegativeBnError.prototype);
        return _this;
    }
    return NegativeBnError;
}(Error));
exports.NegativeBnError = NegativeBnError;
function fromUintBn(bn) {
    if (bn.isNeg()) {
        throw new NegativeBnError(bn);
    }
    if (bn.isZero()) {
        return new Uint8Array(0);
    }
    return new Uint8Array(bn.toArray('be'));
}
exports.fromUintBn = fromUintBn;
