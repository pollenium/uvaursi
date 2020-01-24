import { Uvaursi } from './Uvaursi'

test('simple', () => {
  expect(Uvaursi.uuFromArray([1, 255]).uuToHex()).toBe('01ff')
})
