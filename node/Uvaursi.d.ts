export declare class Uvaursi extends Uint8Array {
    private hex;
    private phex;
    uuToHex(): string;
    uuToPhex(): string;
    uuGenClone(): Uvaursi;
    uuGenPaddedLeft(length: number): Uvaursi;
    uuGenPaddedRight(length: number): Uvaursi;
    uuGetIsEqual(uint8Array: Uint8Array): boolean;
    static uuFromArray(array: Array<number>): Uvaursi;
    static uuFromHexish(hexish: string): Uvaursi;
    static uuGenRandom(length: number): Uvaursi;
    static uuGenConcat(uint8Arrays: Array<Uint8Array>): Uvaursi;
}
