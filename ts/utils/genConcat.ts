export function genConcat(us: Array<Uint8Array>) : Uint8Array {
  const length = us.reduce((length, u) => {
    return length + u.length
  }, 0)
  const u = new Uint8Array(length)
  us.reduce((offset, _u) => {
    u.set(_u, offset)
    return offset + _u.length
  }, 0)
  return u
}
