import { Uu } from './Uu'

test('fromHexish/unwrap', () => {
  const uu = Uu.fromHexish('0xFf')
  expect(uu.unwrap()).toBeInstanceOf(Uint8Array)
  expect(uu.unwrap()).toBeInstanceOf(Uint8Array)
})

test('wrap/toHex', () => {
  const uu = Uu.wrap(new Uint8Array([255]))
  expect(uu.toHex()).toBe('ff')
})
