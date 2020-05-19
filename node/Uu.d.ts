import { UWrapper } from './UWrapper';
import { Uish } from './Uish';
export declare class Uu implements UWrapper {
    readonly u: Uint8Array;
    readonly length: number;
    private hex;
    private phex;
    private utf8;
    constructor(u: Uint8Array);
    toArray(): Array<number>;
    toHex(): string;
    toPhex(): string;
    toUtf8(): string;
    genClone(): Uu;
    genSlice(struct: {
        start: number;
        length?: number;
    }): Uu;
    genPaddedLeft(length: number): Uu;
    genPaddedRight(length: number): Uu;
    genXor(uish: Uish): Uu;
    getIsEqual(uish: Uish): boolean;
    unwrap(): Uint8Array;
    static fromArray(array: Array<number>): Uu;
    static fromHexish(hexish: string): Uu;
    static fromUtf8(utf8: string): Uu;
    static genRandom(length: number): Uu;
    static genConcat(uishes: Array<Uish>): Uu;
    static genEmpty(): Uu;
    static genZeros(length: number): Uu;
    static genFill(struct: {
        length: number;
        fill: number;
    }): Uu;
    static wrap(uish: Uish): Uu;
}
