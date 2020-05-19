export interface GenSliceStruct {
  u: Uint8Array,
  start: number,
  length?: number
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
    start < 0 ||
    start > u.length
  ) {
    throw new InvalidSliceRangeError(struct)
  }

  if (length === undefined) {
    return u.slice(start)
  }

  const end = start + length

  if (
    !Number.isInteger(length) ||
    length < 0 ||
    end > u.length
  ) {
    throw new InvalidSliceRangeError(struct)
  }

  return u.slice(start, end)

}
