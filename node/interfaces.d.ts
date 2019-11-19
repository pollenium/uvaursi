export interface BnInterface {
    isZero(): boolean;
    isNeg(): boolean;
    toArray(endianess: string): Array<number>;
}
