export function toHex(u: Uint8Array): string {
  return Array.from(u, (number: number) => {
    return ('0' + (number & 0xFF).toString(16)).slice(-2)
  }).join('')
}
