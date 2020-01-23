export function fromHexish(hexish: string): Uint8Array {

  if (hexish.length === 0) {
    return new Uint8Array([])
  }

  if (hexish.indexOf('0x') === 0) {
    return fromHexish(hexish.substr(2))
  }

  assertIsValidHexish(hexish)

  const array = hexish.match(/.{1,2}/g).map((byteHex) => {
    return parseInt(byteHex, 16)
  })

  return new Uint8Array(array)

}

export class InvalidHexishCharError extends Error {
  constructor(hexishChar) {
    super(`Invalid hexish char: ${hexishChar}` )
    Object.setPrototypeOf(this, InvalidHexishCharError.prototype)
  }
}

export class InvalidHexishParityError extends Error {
  constructor(hexish) {
    super(`Hexish should be even length, not odd: ${hexish}` )
    Object.setPrototypeOf(this, InvalidHexishParityError.prototype)
  }
}


const hexishCharCodesRanges = [
  [48, 57],   // 0-9
  [97, 102],  // a-f
  [65, 70]    // A-F
]

function getIsValidHexishChar(hexishChar: string): boolean {
  const hexishCharCode = hexishChar.charCodeAt(0)
  for (let i = 0; i < hexishCharCodesRanges.length; i++) {
    const start = hexishCharCodesRanges[i][0]
    const end = hexishCharCodesRanges[i][1]
    if (hexishCharCode >= start && hexishCharCode <= end) {
      return true
    }
  }
  return false
}


function assertIsValidHexish(hexish: string): void {

  if (hexish.length % 2 === 1) {
    throw new InvalidHexishParityError(hexish)
  }
  for (let i = 0; i < hexish.length; i++) {
    const hexishChar = hexish[i]
    if (!getIsValidHexishChar(hexishChar)) {
      throw new InvalidHexishCharError(hexishChar)
    }
  }
}
