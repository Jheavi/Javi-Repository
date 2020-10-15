const { TestScheduler } = require('jest');
const digitalRoot = require('./sum-digits');

describe('Sum of digits', () => {
    test('With 16 should return 7', () => {
        //assign
        const n = 16;
        //add
        const response = digitalRoot(n);
        //assert
        expect(response).toBe(7);
    })

    test('With 456 should return 6', () => {
        //assign
        const n = 456;
        //add
        const response = digitalRoot(n);
        //assert
        expect(response).toBe(6);
    })
});