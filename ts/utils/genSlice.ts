export interface GenSliceStruct {
  u: Uint8Array,
  firstIndex: number,
  length: number
}

export class InvalidSliceRangeError extends Error {
  constructor(struct: GenSliceStruct) {
    const { u, firstIndex, length } = struct
    super(`InvalidSliceRangeError: u.length: ${u.length}, firstIndex: ${firstIndex}, length: ${length}`)
    Object.setPrototypeOf(this, InvalidSliceRangeError.prototype)
  }
}

export function genSlice(struct: GenSliceStruct): Uint8Array {
  const { u, firstIndex, length } = struct
  if (
    !Number.isInteger(firstIndex) ||
    !Number.isInteger(length) ||
    firstIndex < 0 ||
    length < 0 ||
    firstIndex + length > u.length
  ) {
    throw new InvalidSliceRangeError(struct)
  }
  return u.slice(firstIndex, firstIndex + length)
}
