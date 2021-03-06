export class OverflowError extends Error {
  constructor(length: number, uLength: number) {
    super(`Overflow: Trying to put ${uLength} length Uint8Array into ${length} length Uint8Array` )
    Object.setPrototypeOf(this, OverflowError.prototype)
  }
}

export function genPaddedLeft(length: number, unpadded: Uint8Array): Uint8Array {
  if (length < unpadded.length) {
    throw new OverflowError(length, unpadded.length)
  }
  const padded = (new Uint8Array(length)).fill(0)
  padded.set(unpadded, length - unpadded.length)
  return padded
}

export function genPaddedRight(length: number, unpadded: Uint8Array): Uint8Array {
  if (length < unpadded.length) {
    throw new OverflowError(length, unpadded.length)
  }
  const padded = (new Uint8Array(length)).fill(0)
  padded.set(unpadded)
  return padded
}
