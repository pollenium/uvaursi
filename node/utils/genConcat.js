"use strict";
exports.__esModule = true;
function genConcat(us) {
    var length = us.reduce(function (length, u) {
        return length + u.length;
    }, 0);
    var u = new Uint8Array(length);
    us.reduce(function (offset, _u) {
        u.set(_u, offset);
        return offset + _u.length;
    }, 0);
    return u;
}
exports.genConcat = genConcat;
