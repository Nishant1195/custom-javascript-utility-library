const {map, filter, reduceed} = require('./main');

describe('Custom map function tests', () => {

    test('Adds 1 to each element', () => {
        const arr = [1, 2, 3, 4, 5, 6];
        const result = [2, 3, 4, 5, 6, 7];
        expect(map(arr, x => x + 1)).toEqual(result);
    });

    test('Squares each element', () => {
        const arr = [1, 2, 3];
        const result = [1, 4, 9];
        expect(map(arr, x => x * x)).toEqual(result);
    });

    test('Works with empty array', () => {
        const arr = [];
        const result = [];
        expect(map(arr, x => x + 1)).toEqual(result);
    });

    test('Includes index in callback', () => {
        const arr = [10, 20, 30];
        const result = [10, 21, 32]; // element + index
        expect(map(arr, (x, i) => x + i)).toEqual(result);
    });

    test('Works with strings', () => {
        const arr = ['a', 'b', 'c'];
        const result = ['A', 'B', 'C'];
        expect(map(arr, x => x.toUpperCase())).toEqual(result);
    });

    test('Works with negative numbers', () => {
        const arr = [-1, -2, -3];
        const result = [1, 2, 3];
        expect(map(arr, x => Math.abs(x))).toEqual(result);
    });

});

describe('Custom filter function tests', () => {

    test('Filters out even numbers', () => {
        const arr = [1, 2, 3, 4, 5, 6];
        const result = [1, 3, 5];
        expect(filter(arr, x => x % 2 !== 0)).toEqual(result);
    });

    test('Filters numbers greater than 3', () => {
        const arr = [1, 2, 3, 4, 5];
        const result = [4, 5];
        expect(filter(arr, x => x > 3)).toEqual(result);
    });

    test('Filters strings longer than 3 letters', () => {
        const arr = ['hi', 'hello', 'hey', 'hola'];
        const result = ['hello', 'hola'];
        expect(filter(arr, str => str.length > 3)).toEqual(result);
    });

    test('Returns empty array when no items match', () => {
        const arr = [1, 2, 3];
        const result = [];
        expect(filter(arr, x => x > 10)).toEqual(result);
    });

    test('Works with empty array', () => {
        const arr = [];
        const result = [];
        expect(filter(arr, x => x > 0)).toEqual(result);
    });

    test('Includes index parameter in callback', () => {
        const arr = [10, 20, 30, 40];
        // keep only elements where index is even
        const result = [10, 30];
        expect(filter(arr, (x, i) => i % 2 === 0)).toEqual(result);
    });

});

describe('Custom reduceed function tests', () => {

    test('Sums all numbers', () => {
        const arr = [1, 2, 3, 4];
        expect(reduceed(arr, (acc, curr) => acc + curr, 0)).toBe(10);
    });

    test('Multiplies all numbers', () => {
        const arr = [1, 2, 3, 4];
        expect(reduceed(arr, (acc, curr) => acc * curr, 1)).toBe(24);
    });

    test('Finds maximum value', () => {
        const arr = [5, 2, 9, 1];
        expect(reduceed(arr, (acc, curr) => Math.max(acc, curr))).toBe(9);
    });

    test('Concatenates strings', () => {
        const arr = ['Hello', ' ', 'World'];
        expect(reduceed(arr, (acc, curr) => acc + curr, '')).toBe('Hello World');
    });

    test('Works without initial value', () => {
        const arr = [2, 3, 4];
        expect(reduceed(arr, (acc, curr) => acc + curr)).toBe(9);
    });

});


