export class OverflowError extends Error {
    constructor(length, uint8ArrayLength) {
        super(`Overflow: Trying to put ${uint8ArrayLength} length Uint8Array into ${length} length Uint8Array`);
        Object.setPrototypeOf(this, OverflowError.prototype);
    }
}
export function genPaddedLeft(length, unpadded) {
    if (length < unpadded.length) {
        throw new OverflowError(length, unpadded.length);
    }
    const padded = (new Uint8Array(length)).fill(0);
    padded.set(unpadded, length - unpadded.length);
    return padded;
}
export function genPaddedRight(length, unpadded) {
    if (length < unpadded.length) {
        throw new OverflowError(length, unpadded.length);
    }
    const padded = (new Uint8Array(length)).fill(0);
    padded.set(unpadded);
    return padded;
}
