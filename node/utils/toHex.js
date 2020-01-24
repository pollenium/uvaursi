export function toHex(uint8Array) {
    return Array.from(uint8Array, (number) => {
        return ('0' + (number & 0xFF).toString(16)).slice(-2);
    }).join('');
}
