export class NegativeNumberError extends Error {
    constructor(number) {
        super(`Negative number: ${number}`);
        Object.setPrototypeOf(this, NegativeNumberError.prototype);
    }
}
export class DecimalNumberError extends Error {
    constructor(number) {
        super(`Decimal number: ${number}`);
        Object.setPrototypeOf(this, DecimalNumberError.prototype);
    }
}
export class TooLargeNumberError extends Error {
    constructor(number) {
        super(`Too large number: ${number} is greater than 255`);
        Object.setPrototypeOf(this, TooLargeNumberError.prototype);
    }
}
export function fromArray(array) {
    array.forEach((number) => {
        if (number < 0) {
            throw new NegativeNumberError(number);
        }
        if (number % 1 > 0) {
            throw new DecimalNumberError(number);
        }
        if (number > 255) {
            throw new TooLargeNumberError(number);
        }
    });
    return new Uint8Array(array);
}
