import { fromHexish, InvalidHexishError } from './fromHexish'

class Fixture{
  public uint8Array: Uint8Array;
  constructor (public hexish: string, array: Array<number>) {
    this.uint8Array = new Uint8Array(array)
  }
}

const fixtures = [
  new Fixture('', []),
  new Fixture('0x', []),
  new Fixture('0x0', [0]),
  new Fixture('0x00', [0]),
  new Fixture('01', [1]),
  new Fixture('0x01', [1]),
  new Fixture('1', [1]),
  new Fixture('0x1', [1]),
  new Fixture('ff', [255]),
  new Fixture('0xff', [255]),
  new Fixture('Ff', [255]),
  new Fixture('fF', [255]),
  new Fixture('FF', [255]),
  new Fixture('ff0', [255, 0]),
  new Fixture('0xff0', [255, 0]),
  new Fixture('0xff00FF', [255, 0, 255])

]

fixtures.forEach((fixture) => {
  test(fixture.hexish, () => {
    expect(fromHexish(fixture.hexish)).toStrictEqual(fixture.uint8Array)
  })
})

const invalidHexishChar = [
  '\x2F',
  '/',
  '\x3A',
  ':',
  '\x40',
  '@',
  '\x47',
  'G',
  '\x60',
  '`',
  '\x67',
  'g',
  '\n',
  '\x00',
  '\xff'
]

const validHexishChars = ['0', '9', 'a', 'f', 'A', 'F']

invalidHexishChar.forEach((invalidHexishChar) => {
  validHexishChars.forEach((validHexishChar) => {
    const invalidHexishes = [
      `${invalidHexishChar}`,
      `0x0x${validHexishChar}`,
      `${validHexishChar}${invalidHexishChar}`,
      `${invalidHexishChar}${validHexishChar}`,
      `${validHexishChar}${invalidHexishChar}${validHexishChar}`,
      `${validHexishChar}${validHexishChar}${invalidHexishChar}`,
      `${invalidHexishChar}${validHexishChar}${validHexishChar}`,
      `0x${invalidHexishChar}`,
      `0x${validHexishChar}${invalidHexishChar}`,
      `0x${invalidHexishChar}${validHexishChar}`,
      `0x${validHexishChar}${invalidHexishChar}${validHexishChar}`,
      `0x${validHexishChar}${validHexishChar}${invalidHexishChar}`,
      `0x${invalidHexishChar}${validHexishChar}${validHexishChar}`,

    ]
    const validHexishes = [
      `${validHexishChar}`,
      `${validHexishChar}${validHexishChar}`,
      `${validHexishChar}${validHexishChar}${validHexishChar}`,
      `0x${validHexishChar}`,
      `0x${validHexishChar}${validHexishChar}`,
      `0x${validHexishChar}${validHexishChar}${validHexishChar}`,
    ]
    invalidHexishes.forEach((invalidHexish) => {
      test(`invalid: ${invalidHexish}`, () => {
        expect(() => {
          fromHexish(invalidHexish)
        }).toThrow(InvalidHexishError)
      })
    })
    validHexishes.forEach((validHexish) => {
      test(`valid: ${validHexish}`, () => {
        expect(() => {
          fromHexish(validHexish)
        }).not.toThrow()
      })
    })
  })
})
