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

test('genConcat', () => {
  const uu = Uu.genConcat([
    Uu.fromArray([0]),
    new Uint8Array([1]),
    new Uint8Array([]),
    Uu.fromArray([2])
  ])
  expect(uu.toArray()).toStrictEqual([0, 1, 2])
})

test('genFill', () => {
  const uu = Uu.genFill({ length: 4, fill: 7 })
  expect(uu.toArray()).toStrictEqual([7, 7, 7, 7])
})
