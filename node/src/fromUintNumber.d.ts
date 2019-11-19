export declare class NegativeNumberError extends Error {
    constructor(number: any);
}
export declare class DecimalNumberError extends Error {
    constructor(number: any);
}
export declare class UnsafeNumberError extends Error {
    constructor(number: any);
}
export declare function fromUintNumber(uintNumber: number): Uint8Array;
