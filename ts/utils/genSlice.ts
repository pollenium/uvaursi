export interface GenSliceStruct {
  u: Uint8Array,
  start: number,
  length: number
}

export class InvalidSliceRangeError extends Error {
  constructor(struct: GenSliceStruct) {
    const { u, start, length } = struct
    super(`InvalidSliceRangeError: u.length: ${u.length}, start: ${start}, length: ${length}`)
    Object.setPrototypeOf(this, InvalidSliceRangeError.prototype)
  }
}

export function genSlice(struct: GenSliceStruct): Uint8Array {
  const { u, start, length } = struct
  if (
    !Number.isInteger(start) ||
    !Number.isInteger(length) ||
    start < 0 ||
    length < 0 ||
    start + length > u.length
  ) {
    throw new InvalidSliceRangeError(struct)
  }
  return u.slice(start, start + length)
}
