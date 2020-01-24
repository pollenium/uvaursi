import { genConcat } from './genConcat';
class Fixture {
    constructor(arrays, array) {
        this.arrays = arrays;
        this.uint8Arrays = arrays.map((array) => {
            return new Uint8Array(array);
        });
        this.uint8Array = new Uint8Array(array);
    }
}
const fixtures = [
    new Fixture([], []),
    new Fixture([[]], []),
    new Fixture([[], []], []),
    new Fixture([[1], [2, 3], [], [4]], [1, 2, 3, 4])
];
fixtures.forEach((fixture) => {
    test(JSON.stringify(fixture.arrays), () => {
        expect(genConcat(fixture.uint8Arrays)).toStrictEqual(fixture.uint8Array);
    });
});
