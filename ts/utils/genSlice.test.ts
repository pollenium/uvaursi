import { genSlice, InvalidSliceRangeError } from './genSlice'

const original = new Uint8Array([10, 11, 12, 13])

class Fixture{

  public u: Uint8Array;
  public expected: Uint8Array

  constructor (
    u: Array<number>,
    public firstIndex: number,
    public length: number,
    expected: Array<number>
  ) {
    this.u = new Uint8Array(u)
    this.expected = new Uint8Array(expected)
  }
}

const fixtures = [
  new Fixture([], 0, 0, []),
  new Fixture([10], 0, 0, []),
  new Fixture([10], 0, 1, [10]),
  new Fixture([10, 11, 12], 0, 0, []),
  new Fixture([10, 11, 12], 0, 1, [10]),
  new Fixture([10, 11, 12], 0, 2, [10, 11]),
  new Fixture([10, 11, 12], 0, 3, [10, 11, 12]),
  new Fixture([10, 11, 12], 1, 0, []),
  new Fixture([10, 11, 12], 1, 1, [11]),
  new Fixture([10, 11, 12], 1, 2, [11, 12])
]

fixtures.forEach((fixture) => {
  test(JSON.stringify(fixture), () => {
    expect(genSlice({ ...fixture })).toStrictEqual(fixture.expected)
  })
})

const errorFixtures = [
  new Fixture([10], -1, 0, []),
  new Fixture([10], 0, -1, []),
  new Fixture([10], .5, 0, []),
  new Fixture([10], 0, .5, []),
  new Fixture([10], 1, 1, []),
]

errorFixtures.forEach((fixture) => {
  test(JSON.stringify(fixture), () => {
    expect.assertions(1)
    try {
      genSlice({ ...fixture })
    } catch(error) {
      expect(error).toBeInstanceOf(InvalidSliceRangeError)
    }
  })
})
