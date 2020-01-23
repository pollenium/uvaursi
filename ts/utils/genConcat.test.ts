import { genConcat } from './genConcat'

class Fixture{
  public uint8Arrays: Array<Uint8Array>;
  public uint8Array: Uint8Array;
  constructor (public arrays: Array<Array<number>>, array: Array<number>) {
    this.uint8Arrays = arrays.map((array) => {
      return new Uint8Array(array)
    })
    this.uint8Array = new Uint8Array(array)
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
    expect(genConcat(fixture.uint8Arrays)).toStrictEqual(fixture.uint8Array)
  })
})
