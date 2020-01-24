import { toArray } from './toArray'

test('toArray', () => {
  const u = new Uint8Array([1, 255, 0])
  expect(toArray(u)).toBeInstanceOf(Array)
  expect(toArray(u)).toStrictEqual([1, 255, 0])
})
