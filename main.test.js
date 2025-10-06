const map = require('./main');

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
