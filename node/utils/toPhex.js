import { toHex } from './toHex';
export function toPhex(uint8Array) {
    return `0x${toHex(uint8Array)}`;
}
