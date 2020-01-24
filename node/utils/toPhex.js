"use strict";
exports.__esModule = true;
var toHex_1 = require("./toHex");
function toPhex(u) {
    return "0x" + toHex_1.toHex(u);
}
exports.toPhex = toPhex;
