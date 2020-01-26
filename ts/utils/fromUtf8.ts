import utf8Utils from '@protobufjs/utf8'

export function fromUtf8(utf8: string): Uint8Array {
  const length = utf8Utils.length(utf8)
  const uint8Array = new Uint8Array(length)
  utf8Utils.write(utf8, uint8Array, 0)
  return uint8Array
}
