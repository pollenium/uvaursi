export declare class NegativeNumberError extends Error {
    constructor(number: any);
}
export declare class DecimalNumberError extends Error {
    constructor(number: any);
}
export declare class TooLargeNumberError extends Error {
    constructor(number: any);
}
export declare function fromArray(array: Array<number>): Uint8Array;
