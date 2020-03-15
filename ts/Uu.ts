import * as utils from './utils'
import { UWrapper } from './UWrapper'
import { Uish } from './Uish'

export class Uu implements UWrapper {

  private hex: string;
  private phex: string;
  private utf8: string;

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

  toUtf8(): string {
    if (this.utf8) {
      return this.utf8
    }
    this.utf8 = utils.toUtf8(this.u)
    return this.utf8
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

  genXor(uish: Uish): Uu {
    return new Uu(
      utils.genXor(this.u, utils.unwrap(uish))
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

  static fromUtf8(utf8: string): Uu {
    return new Uu(utils.fromUtf8(utf8))
  }

  static genRandom(length: number): Uu {
    return new Uu(utils.genRandom(length))
  }

  static genConcat(uishes: Array<Uish>): Uu {
    const us: Array<Uint8Array> = uishes.map((uish: Uish) => {
      return utils.unwrap(uish)
    })
    return new Uu(utils.genConcat(us))
  }

  static genEmpty(): Uu {
    return Uu.genZeros(0)
  }

  static genZeros(length: number): Uu {
    return new Uu(new Uint8Array(length))
  }

  static wrap(uish: Uish): Uu {
    if (uish instanceof Uint8Array) {
      return new Uu(uish)
    }
    if (uish instanceof ArrayBuffer) {
      return new Uu(new Uint8Array(uish))
    }
    if (uish.u) {
      return new Uu(uish.u)
    }
    throw new Error('Unable to wrap')
  }

}
