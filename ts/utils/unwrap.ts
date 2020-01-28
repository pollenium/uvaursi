import { Uish } from '../Uish'

export function unwrap(uish: Uish): Uint8Array {
  if (uish instanceof Uint8Array) {
    return uish
  }
  if (uish instanceof ArrayBuffer) {
    return new Uint8Array(uish)
  }
  if (uish.u) {
    return uish.u
  }
  throw new Error('Unable to unwrap')
}
