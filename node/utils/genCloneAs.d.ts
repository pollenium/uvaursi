interface CloneClass<T> {
    new (uint8Array: Uint8Array): T;
}
export declare function genCloneAs<T extends Uint8Array>(CloneClass: CloneClass<T>, uint8Array: Uint8Array): T;
export {};
