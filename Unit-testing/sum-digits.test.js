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

    test('With 10000000 should return 1', () => {
        //assign
        const n = 10000000;
        //add
        const response = digitalRoot(n);
        //assert
        expect(response).toBe(1);
    })

    test('With 123456789 should return 45', () => {
        //assign
        const n = 123456789;
        //add
        const response = digitalRoot(n);
        //assert
        expect(response).toBe(9);
    })

    test('With 0 should return 0', () => {
        //assign
        const n = 0;
        //add
        const response = digitalRoot(n);
        //assert
        expect(response).toBe(0);
    })
});