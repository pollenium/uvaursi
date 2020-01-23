export declare class OverflowError extends Error {
    constructor(length: number, uint8ArrayLength: number);
}
export declare function getPaddedLeft(length: number, unpadded: Uint8Array): Uint8Array;
export declare function getPaddedRight(length: number, unpadded: Uint8Array): Uint8Array;
