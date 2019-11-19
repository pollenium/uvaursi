"use strict";
exports.__esModule = true;
var fromArray_1 = require("./fromArray");
function fromUintBn(bn) {
    /* ToDo: Validate uintish bn */
    if (bn.isZero()) {
        return fromArray_1.fromArray([]);
    }
    return fromArray_1.fromArray(bn.toArray('be'));
}
exports.fromUintBn = fromUintBn;
