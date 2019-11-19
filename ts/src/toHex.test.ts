import { toHex } from './toHex'

class Fixture{
  public uint8Array: Uint8Array;
  constructor (array: Array<number>, public hex: string, ) {
    this.uint8Array = new Uint8Array(array)
  }
}

const fixtures = [
  new Fixture([], ''),
  new Fixture([0], '00'),
  new Fixture([1], '01'),
  new Fixture([255], 'ff'),
  new Fixture([255], 'ff'),
  new Fixture([1, 1], '0101'),
]

fixtures.forEach((fixture) => {
  test(fixture.hex, () => {
    expect(toHex(fixture.uint8Array)).toStrictEqual(fixture.hex)
  })
})
