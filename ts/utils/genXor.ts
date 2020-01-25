export class LengthMismatchError extends Error {
  constructor(a: Uint8Array, b: Uint8Array) {
    super(`Cannot XOR: a.length !== b.length: ${a.length} vs ${b.length}`)
  }
}

export function genXor(a: Uint8Array, b: Uint8Array): Uint8Array {
  if (a.length !== b.length) {
    throw new LengthMismatchError(a, b)
  }

  const xor = new Uint8Array(a.length)

  for (let i = 0; i < a.length; i ++) {
    xor[i] = a[i]^b[i]
  }

  return xor
}
