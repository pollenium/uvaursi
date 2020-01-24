import { fromHexish, InvalidHexishCharError, InvalidHexishParityError } from './fromHexish'

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
    hexish: '0x',
    u: new Uint8Array([])
  },
  {
    hexish: '0x00',
    u: new Uint8Array([0])
  },
  {
    hexish: '0x01',
    u: new Uint8Array([1])
  },
  {
    hexish: '0xff',
    u: new Uint8Array([255])
  },
  {
    hexish: '0xfF',
    u: new Uint8Array([255])
  },
  {
    hexish: '0xFfFf',
    u: new Uint8Array([255, 255])
  },
  {
    hexish: '0x01FF',
    u: new Uint8Array([1, 255])
  }
]

fixtures.forEach((fixture, index) => {
  const { hexish, u } = fixture
  test(`fromHexish ${index}: ${hexish}`, () => {
    expect(fromHexish(hexish)).toStrictEqual(u)
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
    const throwInvalidHexishCharErrors = [
      `${validHexishChar}${invalidHexishChar}`,
      `${invalidHexishChar}${validHexishChar}`,
      `${validHexishChar}${invalidHexishChar}${validHexishChar}${validHexishChar}`,
      `${validHexishChar}${validHexishChar}${validHexishChar}${invalidHexishChar}`,
      `${invalidHexishChar}${validHexishChar}${validHexishChar}${validHexishChar}`,
      `0x${validHexishChar}${invalidHexishChar}`,
      `0x${invalidHexishChar}${validHexishChar}`,
      `0x${validHexishChar}${validHexishChar}${invalidHexishChar}${validHexishChar}`,
      `0x${validHexishChar}${validHexishChar}${validHexishChar}${invalidHexishChar}`,
      `0x${invalidHexishChar}${validHexishChar}${validHexishChar}${validHexishChar}`
    ]
    const throwInvalidHexishParityErrors = [
      `${validHexishChar}`,
      `${validHexishChar}${validHexishChar}${validHexishChar}`,
      `0x${validHexishChar}`,
      `0x${validHexishChar}${validHexishChar}${validHexishChar}`,
    ]
    const validHexishes = [
      '',
      `${validHexishChar}${validHexishChar}`,
      `${validHexishChar}${validHexishChar}${validHexishChar}${validHexishChar}`,
      '0x',
      `0x${validHexishChar}${validHexishChar}`,
      `0x${validHexishChar}${validHexishChar}${validHexishChar}${validHexishChar}`
    ]
    throwInvalidHexishCharErrors.forEach((hexish) => {
      test(`invalidHexishChar: ${hexish}`, () => {
        expect(() => {
          fromHexish(hexish)
        }).toThrow(InvalidHexishCharError)
      })
    })
    throwInvalidHexishParityErrors.forEach((hexish) => {
      test(`invalidHexishParity: ${hexish}`, () => {
        expect(() => {
          fromHexish(hexish)
        }).toThrow(InvalidHexishParityError)
      })
    })
    validHexishes.forEach((hexish) => {
      test(`validHexish: ${hexish}`, () => {
        expect(() => {
          fromHexish(hexish)
        }).not.toThrow()
      })
    })
  })
})
