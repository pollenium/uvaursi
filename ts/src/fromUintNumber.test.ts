import Bn from 'bn.js'
import { fromUintNumber, NegativeNumberError, DecimalNumberError, UnsafeNumberError } from './fromUintNumber'

class Fixture{
  public uint8Array: Uint8Array;
  constructor (public number: number, array: Array<number>) {
    this.uint8Array = new Uint8Array(array)
  }
}

const fixtures = [
  new Fixture(0, []),
  new Fixture(1, [1]),
  new Fixture(255, [255]),
  new Fixture(256, [1, 0]),
  new Fixture(257, [1, 1]),
  new Fixture(511, [1, 255]),
  new Fixture(512, [2, 0]),
  new Fixture(65535, [255, 255]),
  new Fixture(65536, [1, 0, 0]),
  new Fixture(65537, [1, 0, 1]),
]

fixtures.forEach((fixture) => {
  test(fixture.number.toString(), () => {
    expect(fromUintNumber(fixture.number)).toStrictEqual(fixture.uint8Array)
  })
})

test('NegativeNumberError', () => {
  expect(() => {
    fromUintNumber(-1)
  }).toThrow(NegativeNumberError)
})

test('DecimalNumberError', () => {
  expect(() => {
    fromUintNumber(.5)
  }).toThrow(DecimalNumberError)
})

test('UnsafeNumberError', () => {
  expect(() => {
    fromUintNumber(Number.MAX_SAFE_INTEGER + 1)
  }).toThrow(UnsafeNumberError)
})
