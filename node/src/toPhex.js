"use strict";
exports.__esModule = true;
var toHex_1 = require("./toHex");
function toPhex(uint8Array) {
    return "0x" + toHex_1.toHex(uint8Array);
}
exports.toPhex = toPhex;
