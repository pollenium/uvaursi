import * as utils from './utils'

export class Uvaursi {

  private hex: string;
  private phex: string;

  constructor(readonly uint8Array: Uint8Array) {}

  toHex(): string {
    if (this.hex) {
      return this.hex
    }
    this.hex = utils.toHex(this.uint8Array)
    return this.hex
  }

  toPhex(): string {
    if (this.phex) {
      return this.phex
    }
    this.phex = utils.toPhex(this.uint8Array)
    return this.phex
  }

  genClone(): Uvaursi {
    return new Uvaursi(this.uint8Array.slice())
  }

  genPaddedLeft(length: number): Uvaursi {
    return new Uvaursi(
      utils.genPaddedLeft(length, this.uint8Array)
    )
  }

  genPaddedRight(length: number): Uvaursi {
    return new Uvaursi(
      utils.genPaddedRight(length, this.uint8Array)
    )
  }

  getIsEqual(uvaursi: Uvaursi): boolean {
    return utils.getIsEqual(this.uint8Array, uvaursi.uint8Array)
  }

  static fromArray(array: Array<number>): Uvaursi {
    return new Uvaursi(utils.fromArray(array))
  }

  static fromHexish(hexish: string): Uvaursi {
    return new Uvaursi(utils.fromHexish(hexish))
  }

  static genRandom(length: number): Uvaursi {
    return new Uvaursi(utils.genRandom(length))
  }

  static genConcat(uvaursis: Array<Uvaursi>): Uvaursi {
    const uint8Arrays = uvaursis.map((uvaursi) => {
      return uvaursi.uint8Array
    })
    return new Uvaursi(utils.genConcat(uint8Arrays))
  }

}
