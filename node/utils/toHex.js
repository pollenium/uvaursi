"use strict";
exports.__esModule = true;
function toHex(u) {
    return Array.from(u, function (number) {
        return ('0' + (number & 0xFF).toString(16)).slice(-2);
    }).join('');
}
exports.toHex = toHex;
