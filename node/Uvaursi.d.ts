export declare class Uvaursi extends Uint8Array {
    private hex;
    private phex;
    toHex(): string;
    toPhex(): string;
    genClone(): Uvaursi;
    genPaddedLeft(length: number): Uvaursi;
    genPaddedRight(length: number): Uvaursi;
    getIsEqual(uint8Array: Uint8Array): boolean;
    static fromArray(array: Array<number>): Uvaursi;
    static fromHexish(hexish: string): Uvaursi;
    static genRandom(length: number): Uvaursi;
    static genConcat(uint8Arrays: Array<Uint8Array>): Uvaursi;
}
