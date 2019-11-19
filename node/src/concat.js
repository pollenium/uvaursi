"use strict";
exports.__esModule = true;
function concat(uint8Arrays) {
    var length = uint8Arrays.reduce(function (length, uint8Array) {
        return length + uint8Array.length;
    }, 0);
    var uint8Array = new Uint8Array(length);
    uint8Arrays.reduce(function (offset, _uint8Array) {
        uint8Array.set(_uint8Array, offset);
        return offset + _uint8Array.length;
    }, 0);
    return uint8Array;
}
exports.concat = concat;
