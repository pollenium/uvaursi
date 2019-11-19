export class InvalidHexishError extends Error {
  constructor(hexish) {
    super(`Invalid hexish: ${hexish}` )
    Object.setPrototypeOf(this, InvalidHexishError.prototype)
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


function getIsValidChoppedHexish(choppedHexish: string): boolean {
  for (let i = 0; i < choppedHexish.length; i++) {
    if (!getIsValidHexishChar(choppedHexish[i])) {
      return false
    }
  }
  return true
}


export function fromHexish(hexish: string): Uint8Array {

  const choppedHexish = hexish.indexOf('0x') === 0 ? hexish.substr(2) : hexish

  if (choppedHexish.length === 0) {
    return new Uint8Array([])
  }

  if (!getIsValidChoppedHexish(choppedHexish)) {
    throw new InvalidHexishError(hexish)
  }

  const array = choppedHexish.match(/.{1,2}/g).map((byteHex) => {
    return parseInt(byteHex, 16)
  })

  return new Uint8Array(array)

}
