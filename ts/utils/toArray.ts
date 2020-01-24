export function toArray(u: Uint8Array): Array<number> {
  const array = []
  u.forEach((element) => {
    array.push(element)
  })
  return array
}
