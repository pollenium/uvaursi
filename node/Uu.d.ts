import { Uish } from './Uish';
export declare class Uu {
    readonly u: Uint8Array;
    private hex;
    private phex;
    constructor(u: Uint8Array);
    toHex(): string;
    toPhex(): string;
    genClone(): Uu;
    genPaddedLeft(length: number): Uu;
    genPaddedRight(length: number): Uu;
    getIsEqual(uish: Uish): boolean;
    unwrap(): Uint8Array;
    static fromArray(array: Array<number>): Uu;
    static fromHexish(hexish: string): Uu;
    static genRandom(length: number): Uu;
    static genConcat(uvaursis: Array<Uish>): Uu;
    static wrap(uish: Uish): Uu;
}