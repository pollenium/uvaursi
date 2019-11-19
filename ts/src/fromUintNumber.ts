export class NegativeNumberError extends Error {
  constructor(number) {
    super(`Negative number: ${number}`)
    Object.setPrototypeOf(this, NegativeNumberError.prototype)
  }
}

export class DecimalNumberError extends Error {
  constructor(number) {
    super(`Decimal number: ${number}`)
    Object.setPrototypeOf(this, DecimalNumberError.prototype)
  }
}

export class UnsafeNumberError extends Error {
  constructor(number) {
    super(`Unsafe number: ${number} is greater than Number.MAX_SAFE_INTEGER`)
    Object.setPrototypeOf(this, UnsafeNumberError.prototype)
  }
}

function encodeToArray(array: Array<number>, uintNumber) {
  array.unshift(uintNumber % 256)
  if (uintNumber >= 256) {
    encodeToArray(array, Math.floor(uintNumber / 256))
  }
  return array
}

export function fromUintNumber(uintNumber: number): Uint8Array {
  if (uintNumber < 0) {
    throw new NegativeNumberError(uintNumber)
  }
  if (uintNumber % 1 > 0) {
    throw new DecimalNumberError(uintNumber)
  }
  if (uintNumber > Number.MAX_SAFE_INTEGER) {
    throw new UnsafeNumberError(uintNumber)
  }
  if (uintNumber === 0) {
    return new Uint8Array(0)
  }
  return new Uint8Array(encodeToArray([], uintNumber))
}
