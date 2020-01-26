import utf8Utils from '@protobufjs/utf8'

export function toUtf8(u: Uint8Array): string {
  return utf8Utils.read(u, 0, u.length)
}
