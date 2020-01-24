import { toHex } from './toHex'

export function toPhex(u: Uint8Array): string {
  return `0x${toHex(u)}`
}
