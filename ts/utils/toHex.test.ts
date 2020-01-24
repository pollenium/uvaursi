import { toHex } from './toHex'

interface Fixture{
  hexish: string
  u: Uint8Array,
}

const fixtures: Array<Fixture> = [
  {
    hexish: '',
    u: new Uint8Array([])
  },
  {
    hexish: '00',
    u: new Uint8Array([0])
  },
  {
    hexish: '01',
    u: new Uint8Array([1])
  },
  {
    hexish: 'ff',
    u: new Uint8Array([255])
  },
  {
    hexish: '0001',
    u: new Uint8Array([0, 1])
  },
  {
    hexish: 'ffff',
    u: new Uint8Array([255, 255])
  }
]

fixtures.forEach((fixture, index) => {
  const { hexish, u } = fixture
  test(`toHex ${index}: ${hexish}`, () => {
    expect(toHex(u)).toBe(hexish)
  })
})
