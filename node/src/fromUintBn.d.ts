import { BnInterface } from '../interfaces';
export declare class NegativeBnError extends Error {
    constructor(bn: any);
}
export declare function fromUintBn(bn: BnInterface): Uint8Array;
