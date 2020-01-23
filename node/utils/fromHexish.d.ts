export declare function fromHexish(hexish: string): Uint8Array;
export declare class InvalidHexishCharError extends Error {
    constructor(hexishChar: any);
}
export declare class InvalidHexishParityError extends Error {
    constructor(hexish: any);
}
