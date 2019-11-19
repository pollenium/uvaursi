import Bn from 'bn.js'
import { fromUintBn, NegativeBnError } from './fromUintBn'

class Fixture{
  public bn: Bn;
  public uint8Array: Uint8Array;
  constructor (number: number, array: Array<number>) {
    this.bn = new Bn(number)
    this.uint8Array = new Uint8Array(array)
  }
}

const fixtures = [
  new Fixture(0, []),
  new Fixture(1, [1]),
  new Fixture(255, [255]),
  new Fixture(256, [1, 0]),
  new Fixture(257, [1, 1]),
  new Fixture(256 * 256, [1, 0, 0])
]

fixtures.forEach((fixture) => {
  test(fixture.bn.toString(), () => {
    expect(fromUintBn(fixture.bn)).toStrictEqual(fixture.uint8Array)
  })
})

test('NegativeBnError', () => {
  expect(() => {
    fromUintBn(new Bn(-1))
  }).toThrow(NegativeBnError)
})
