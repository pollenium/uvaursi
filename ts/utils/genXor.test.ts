import { genXor } from './genXor'

test('genXor', () => {
  const a = new Uint8Array([0x01, 0x02, 0xf0, 0xff])
  const b = new Uint8Array([0x33, 0x46, 0x22, 0xaa])
  const xor = new Uint8Array([0x32, 0x44, 0xD2, 0x55])
  expect(genXor(a, b)).toStrictEqual(xor)
})
