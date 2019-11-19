import { BnInterface } from '../interfaces'

export class NegativeBnError extends Error {
  constructor(bn) {
    super(`Negative BN: ${bn}`)
    Object.setPrototypeOf(this, NegativeBnError.prototype)
  }
}

export function fromUintBn(bn: BnInterface): Uint8Array {
  if (bn.isNeg()) {
    throw new NegativeBnError(bn)
  }
  if (bn.isZero()) {
    return new Uint8Array(0)
  }
  return new Uint8Array(bn.toArray('be'))
}
