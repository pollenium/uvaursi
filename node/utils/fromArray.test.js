import { fromArray, NegativeNumberError, DecimalNumberError, TooLargeNumberError } from './fromArray';
test('[0, 255]', () => {
    expect(fromArray([0, 255])).toStrictEqual(new Uint8Array([0, 255]));
});
test('NegativeNumberError', () => {
    expect(() => {
        fromArray([-1]);
    }).toThrow(NegativeNumberError);
});
test('DecimalNumberError', () => {
    expect(() => {
        fromArray([1.5]);
    }).toThrow(DecimalNumberError);
});
test('TooLargeNumberError', () => {
    expect(() => {
        fromArray([256]);
    }).toThrow(TooLargeNumberError);
});
