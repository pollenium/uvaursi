import { toHex } from './toHex'

interface Fixture{
  hexish: string
  uint8Array: Uint8Array,
}

const fixtures: Array<Fixture> = [
  {
    hexish: '',
    uint8Array: new Uint8Array([])
  },
  {
    hexish: '00',
    uint8Array: new Uint8Array([0])
  },
  {
    hexish: '01',
    uint8Array: new Uint8Array([1])
  },
  {
    hexish: 'ff',
    uint8Array: new Uint8Array([255])
  },
  {
    hexish: '0001',
    uint8Array: new Uint8Array([0, 1])
  },
  {
    hexish: 'ffff',
    uint8Array: new Uint8Array([255, 255])
  }
]

fixtures.forEach((fixture, index) => {
  const { hexish, uint8Array } = fixture
  test(`toHex ${index}: ${hexish}`, () => {
    expect(toHex(uint8Array)).toBe(hexish)
  })
})
