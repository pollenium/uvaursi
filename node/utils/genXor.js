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
var LengthMismatchError = /** @class */ (function (_super) {
    __extends(LengthMismatchError, _super);
    function LengthMismatchError(a, b) {
        return _super.call(this, "Cannot XOR: a.length !== b.length: " + a.length + " vs " + b.length) || this;
    }
    return LengthMismatchError;
}(Error));
exports.LengthMismatchError = LengthMismatchError;
function genXor(a, b) {
    if (a.length !== b.length) {
        throw new LengthMismatchError(a, b);
    }
    var xor = new Uint8Array(a.length);
    for (var i = 0; i < a.length; i++) {
        xor[i] = a[i] ^ b[i];
    }
    return xor;
}
exports.genXor = genXor;
