export function genRandom(length: number) {
  /*TODO: assert int */
  const u = new Uint8Array(length)
  for (let i = 0; i < length; i ++) {
    u[i] = Math.floor(Math.random() * 256)
  }
  return u
}
