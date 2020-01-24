import * as utils from './utils'
import { Uish } from './Uish'

export class Uu {

  private hex: string;
  private phex: string;

  constructor(readonly u: Uint8Array) {}

  toArray(): Array<number> {
    return utils.toArray(this.u)
  }

  toHex(): string {
    if (this.hex) {
      return this.hex
    }
    this.hex = utils.toHex(this.u)
    return this.hex
  }

  toPhex(): string {
    if (this.phex) {
      return this.phex
    }
    this.phex = utils.toPhex(this.u)
    return this.phex
  }

  genClone(): Uu {
    return new Uu(this.u.slice())
  }

  genPaddedLeft(length: number): Uu {
    return new Uu(
      utils.genPaddedLeft(length, this.u)
    )
  }

  genPaddedRight(length: number): Uu {
    return new Uu(
      utils.genPaddedRight(length, this.u)
    )
  }

  getIsEqual(uish: Uish): boolean {
    return utils.getIsEqual(this.u, utils.unwrap(uish))
  }

  unwrap(): Uint8Array {
    return utils.unwrap(this)
  }

  static fromArray(array: Array<number>): Uu {
    return new Uu(utils.fromArray(array))
  }

  static fromHexish(hexish: string): Uu {
    return new Uu(utils.fromHexish(hexish))
  }

  static genRandom(length: number): Uu {
    return new Uu(utils.genRandom(length))
  }

  static genConcat(uvaursis: Array<Uish>): Uu {
    const us = uvaursis.map((uvaursi) => {
      return utils.unwrap(us)
    })
    return new Uu(utils.genConcat(us))
  }

  static genZeros(length: number): Uu {
    return new Uu(new Uint8Array(length))
  }

  static wrap(uish: Uish): Uu {
    if (uish instanceof Uint8Array) {
      return new Uu(uish)
    }
    if (uish.u) {
      return new Uu(uish.u)
    }
    throw new Error('Unable to wrap')
  }

}
