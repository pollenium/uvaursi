export interface GenSliceStruct {
    u: Uint8Array;
    firstIndex: number;
    length: number;
}
export declare class InvalidSliceRangeError extends Error {
    constructor(struct: GenSliceStruct);
}
export declare function genSlice(struct: GenSliceStruct): Uint8Array;
