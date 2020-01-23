export class OverflowError extends Error {
  constructor(length: number, uint8ArrayLength: number) {
    super(`Overflow: Trying to put ${uint8ArrayLength} length Uint8Array into ${length} length Buttercup` )
    Object.setPrototypeOf(this, OverflowError.prototype)
  }
}

export function getPaddedLeft(length: number, unpadded: Uint8Array): Uint8Array {
  if (length < unpadded.length) {
    throw new OverflowError(length, unpadded.length)
  }
  const padded = (new Uint8Array(length)).fill(0)
  padded.set(unpadded, length - unpadded.length)
  return padded
}

export function getPaddedRight(length: number, unpadded: Uint8Array): Uint8Array {
  if (length < unpadded.length) {
    throw new OverflowError(length, unpadded.length)
  }
  const padded = (new Uint8Array(length)).fill(0)
  padded.set(unpadded)
  return padded
}
