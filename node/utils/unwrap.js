"use strict";
exports.__esModule = true;
function unwrap(uish) {
    if (uish instanceof Uint8Array) {
        return uish;
    }
    if (uish instanceof ArrayBuffer) {
        return new Uint8Array(uish);
    }
    if (uish.u) {
        return uish.u;
    }
    throw new Error('Unable to unwrap');
}
exports.unwrap = unwrap;
