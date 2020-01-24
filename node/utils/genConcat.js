export function genConcat(uint8Arrays) {
    const length = uint8Arrays.reduce((length, uint8Array) => {
        return length + uint8Array.length;
    }, 0);
    const uint8Array = new Uint8Array(length);
    uint8Arrays.reduce((offset, _uint8Array) => {
        uint8Array.set(_uint8Array, offset);
        return offset + _uint8Array.length;
    }, 0);
    return uint8Array;
}
