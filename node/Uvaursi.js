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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
exports.__esModule = true;
var utils = __importStar(require("./utils"));
var Uvaursi = /** @class */ (function (_super) {
    __extends(Uvaursi, _super);
    function Uvaursi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Uvaursi.prototype.uuToHex = function () {
        if (this.hex) {
            return this.hex;
        }
        this.hex = utils.toHex(this);
        return this.hex;
    };
    Uvaursi.prototype.uuToPhex = function () {
        if (this.phex) {
            return this.phex;
        }
        this.phex = utils.toPhex(this);
        return this.phex;
    };
    Uvaursi.prototype.uuGenClone = function () {
        return new Uvaursi(this.slice());
    };
    Uvaursi.prototype.uuGenPaddedLeft = function (length) {
        return new Uvaursi(utils.genPaddedLeft(length, this));
    };
    Uvaursi.prototype.uuGenPaddedRight = function (length) {
        return new Uvaursi(utils.genPaddedRight(length, this));
    };
    Uvaursi.prototype.uuGetIsEqual = function (uint8Array) {
        return utils.getIsEqual(this, uint8Array);
    };
    Uvaursi.uuFromArray = function (array) {
        return new Uvaursi(utils.fromArray(array));
    };
    Uvaursi.uuFromHexish = function (hexish) {
        return new Uvaursi(utils.fromHexish(hexish));
    };
    Uvaursi.uuGenRandom = function (length) {
        return new Uvaursi(utils.genRandom(length));
    };
    Uvaursi.uuGenConcat = function (uint8Arrays) {
        return new Uvaursi(utils.genConcat(uint8Arrays));
    };
    return Uvaursi;
}(Uint8Array));
exports.Uvaursi = Uvaursi;
