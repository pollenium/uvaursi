export declare class Uvaursi {
    readonly uint8Array: Uint8Array;
    private hex;
    private phex;
    constructor(uint8Array: Uint8Array);
    toHex(): string;
    toPhex(): string;
    genClone(): Uvaursi;
    genPaddedLeft(length: number): Uvaursi;
    genPaddedRight(length: number): Uvaursi;
    getIsEqual(uvaursi: Uvaursi): boolean;
    static fromArray(array: Array<number>): Uvaursi;
    static fromHexish(hexish: string): Uvaursi;
    static genRandom(length: number): Uvaursi;
    static genConcat(uvaursis: Array<Uvaursi>): Uvaursi;
}
