import { toHex } from './toHex'

export function toPhex(uint8Array: Uint8Array): string {
  return `0x${toHex(uint8Array)}`
}
