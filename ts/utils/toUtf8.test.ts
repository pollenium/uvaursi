import { toUtf8 } from './toUtf8'

interface Fixture {
  utf8: string;
  array: Array<number>
}

const fixtures: Array<Fixture> = [
  {
    utf8: '',
    array: []
  },
  {
    utf8: 'Foo © bar 𝌆 baz ☃ qux',
    array: [0x46, 0x6F, 0x6F, 0x20, 0xC2, 0xA9, 0x20, 0x62, 0x61, 0x72, 0x20, 0xF0, 0x9D, 0x8C, 0x86, 0x20, 0x62, 0x61, 0x7A, 0x20, 0xE2, 0x98, 0x83, 0x20, 0x71, 0x75, 0x78]
  }
]

fixtures.forEach((fixture) => {
  test(`fixture: "${fixture.utf8}"`, () => {
    const uint8Array = new Uint8Array(fixture.array)
    expect(toUtf8(uint8Array)).toStrictEqual(fixture.utf8)
  })
})
