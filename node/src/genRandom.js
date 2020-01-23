"use strict";
exports.__esModule = true;
function genRandom(length) {
    /*TODO: assert int */
    var uint8Array = new Uint8Array(length);
    for (var i = 0; i < length; i++) {
        uint8Array[i] = Math.floor(Math.random() * 256);
    }
    return uint8Array;
}
exports.genRandom = genRandom;
