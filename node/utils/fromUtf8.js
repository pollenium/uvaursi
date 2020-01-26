"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var utf8_1 = __importDefault(require("@protobufjs/utf8"));
function fromUtf8(utf8) {
    var length = utf8_1["default"].length(utf8);
    var uint8Array = new Uint8Array(length);
    utf8_1["default"].write(utf8, uint8Array, 0);
    return uint8Array;
}
exports.fromUtf8 = fromUtf8;
