"use strict";
exports.__esModule = true;
function encodeToArray(array, uintNumber) {
    array.unshift(uintNumber % 256);
    if (uintNumber >= 256) {
        encodeToArray(array, Math.floor(uintNumber / 256));
    }
    return array;
}
function fromUintNumber(uintNumber) {
    return new Uint8Array(encodeToArray([], uintNumber));
}
exports.fromUintNumber = fromUintNumber;
