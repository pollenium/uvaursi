import { genConcat } from './genConcat'

class Fixture{
  public us: Array<Uint8Array>;
  public u: Uint8Array;
  constructor (public arrays: Array<Array<number>>, array: Array<number>) {
    this.us = arrays.map((array) => {
      return new Uint8Array(array)
    })
    this.u = new Uint8Array(array)
  }
}

const fixtures = [
  new Fixture([], []),
  new Fixture([[]], []),
  new Fixture([[],[]], []),
  new Fixture([[1], [2, 3], [], [4]], [1, 2, 3, 4])
]

fixtures.forEach((fixture) => {
  test(JSON.stringify(fixture.arrays), () => {
    expect(genConcat(fixture.us)).toStrictEqual(fixture.u)
  })
})
