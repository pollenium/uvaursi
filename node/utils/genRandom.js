"use strict";
exports.__esModule = true;
function genRandom(length) {
    /*TODO: assert int */
    var u = new Uint8Array(length);
    for (var i = 0; i < length; i++) {
        u[i] = Math.floor(Math.random() * 256);
    }
    return u;
}
exports.genRandom = genRandom;
