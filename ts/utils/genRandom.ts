export function genRandom(length: number) {
  /*TODO: assert int */
  const uint8Array = new Uint8Array(length)
  for (let i = 0; i < length; i ++) {
    uint8Array[i] = Math.floor(Math.random() * 256)
  }
  return uint8Array
}
