export function toHex(uint8Array: Uint8Array): string {
  return Array.from(uint8Array, (number: number) => {
    return ('0' + (number & 0xFF).toString(16)).slice(-2)
  }).join('')
}
