"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var utf8_1 = __importDefault(require("@protobufjs/utf8"));
function toUtf8(u) {
    return utf8_1["default"].read(u, 0, u.length);
}
exports.toUtf8 = toUtf8;
