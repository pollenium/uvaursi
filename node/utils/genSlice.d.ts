export interface GenSliceStruct {
    u: Uint8Array;
    start: number;
    length: number;
}
export declare class InvalidSliceRangeError extends Error {
    constructor(struct: GenSliceStruct);
}
export declare function genSlice(struct: GenSliceStruct): Uint8Array;
