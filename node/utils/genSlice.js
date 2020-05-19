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
var InvalidSliceRangeError = /** @class */ (function (_super) {
    __extends(InvalidSliceRangeError, _super);
    function InvalidSliceRangeError(struct) {
        var _this = this;
        var u = struct.u, start = struct.start, length = struct.length;
        _this = _super.call(this, "InvalidSliceRangeError: u.length: " + u.length + ", start: " + start + ", length: " + length) || this;
        Object.setPrototypeOf(_this, InvalidSliceRangeError.prototype);
        return _this;
    }
    return InvalidSliceRangeError;
}(Error));
exports.InvalidSliceRangeError = InvalidSliceRangeError;
function genSlice(struct) {
    var u = struct.u, start = struct.start, length = struct.length;
    if (!Number.isInteger(start) ||
        start < 0 ||
        start > u.length) {
        throw new InvalidSliceRangeError(struct);
    }
    if (length === undefined) {
        return u.slice(start);
    }
    var end = start + length;
    if (!Number.isInteger(length) ||
        length < 0 ||
        end > u.length) {
        throw new InvalidSliceRangeError(struct);
    }
    return u.slice(start, end);
}
exports.genSlice = genSlice;
