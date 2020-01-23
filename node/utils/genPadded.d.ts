export declare class OverflowError extends Error {
    constructor(length: number, uint8ArrayLength: number);
}
export declare function genPaddedLeft(length: number, unpadded: Uint8Array): Uint8Array;
export declare function genPaddedRight(length: number, unpadded: Uint8Array): Uint8Array;
