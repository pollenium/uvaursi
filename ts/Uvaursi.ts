import * as utils from './utils'

export class Uvaursi extends Uint8Array {

  private hex: string;
  private phex: string;

  constructor(uint8Array: Uint8Array) {
    super(uint8Array)
  }

  uuToHex(): string {
    if (this.hex) {
      return this.hex
    }
    this.hex = utils.toHex(this)
    return this.hex
  }

  uuToPhex(): string {
    if (this.phex) {
      return this.phex
    }
    this.phex = utils.toPhex(this)
    return this.phex
  }

  uuGenClone(): Uvaursi {
    return new Uvaursi(this.slice())
  }

  uuGenPaddedLeft(length: number): Uvaursi {
    return new Uvaursi(
      utils.genPaddedLeft(length, this)
    )
  }

  uuGenPaddedRight(length: number): Uvaursi {
    return new Uvaursi(
      utils.genPaddedRight(length, this)
    )
  }

  uuGetIsEqual(uint8Array: Uint8Array): boolean {
    return utils.getIsEqual(this, uint8Array)
  }

  static uuFromArray(array: Array<number>): Uvaursi {
    return new Uvaursi(utils.fromArray(array))
  }

  static uuFromHexish(hexish: string): Uvaursi {
    return new Uvaursi(utils.fromHexish(hexish))
  }

  static uuGenRandom(length: number): Uvaursi {
    return new Uvaursi(utils.genRandom(length))
  }

  static uuGenConcat(uint8Arrays: Array<Uint8Array>): Uvaursi {
    return new Uvaursi(utils.genConcat(uint8Arrays))
  }

}
