import * as utils from './utils';
export class Uvaursi extends Uint8Array {
    constructor(uint8Array) {
        super(uint8Array);
    }
    uuToHex() {
        if (this.hex) {
            return this.hex;
        }
        this.hex = utils.toHex(this);
        return this.hex;
    }
    uuToPhex() {
        if (this.phex) {
            return this.phex;
        }
        this.phex = utils.toPhex(this);
        return this.phex;
    }
    uuGenClone() {
        return new Uvaursi(this.slice());
    }
    uuGenPaddedLeft(length) {
        return new Uvaursi(utils.genPaddedLeft(length, this));
    }
    uuGenPaddedRight(length) {
        return new Uvaursi(utils.genPaddedRight(length, this));
    }
    uuGetIsEqual(uint8Array) {
        return utils.getIsEqual(this, uint8Array);
    }
    static uuFromArray(array) {
        return new Uvaursi(utils.fromArray(array));
    }
    static uuFromHexish(hexish) {
        return new Uvaursi(utils.fromHexish(hexish));
    }
    static uuGenRandom(length) {
        return new Uvaursi(utils.genRandom(length));
    }
    static uuGenConcat(uint8Arrays) {
        return new Uvaursi(utils.genConcat(uint8Arrays));
    }
}
