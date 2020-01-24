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
var into_1 = require("./into");
test('Uint8Array -> Uint8Array', function () {
    var a = new Uint8Array([1, 2, 3]);
    var b = into_1.into(Uint8Array, a);
    expect(a).toStrictEqual(b);
});
test('Uint8Array -> BabyClass', function () {
    var BabyClass = /** @class */ (function (_super) {
        __extends(BabyClass, _super);
        function BabyClass() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return BabyClass;
    }(Uint8Array));
    var a = new Uint8Array([1, 2, 3]);
    var b = into_1.into(BabyClass, a);
    expect(a).toStrictEqual(b);
});
