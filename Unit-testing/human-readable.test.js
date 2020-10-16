const humanReadable = require('./human-readable');

describe('Human-readable function', () => {
    test('Should return 00:00:00', () => {
        //assign
        const number = 0;
        //add
        const response = humanReadable(number);
        //assert
        expect(response).toEqual('00:00:00');
    });
    
    test('Should return 00:00:05', () => {
        //assign
        const number = 5;
        //add
        const response = humanReadable(number);
        //assert
        expect(response).toEqual('00:00:05');
    });
    
    test('Should return 00:01:00', () => {
        //assign
        const number = 60;
        //add
        const response = humanReadable(number);
        //assert
        expect(response).toEqual('00:01:00');
    });
    
    test('Should return 01:01:01', () => {
        //assign
        const number = 3661;
        //add
        const response = humanReadable(number);
        //assert
        expect(response).toEqual('01:01:01');
    });
    
    test('Should return 23:59:59', () => {
        //assign
        const number = 86399;
        //add
        const response = humanReadable(number);
        //assert
        expect(response).toEqual('23:59:59');
    });
    
    test('Should return 99:59:59', () => {
        //assign
        const number = 359999;
        //add
        const response = humanReadable(number);
        //assert
        expect(response).toEqual('99:59:59');
    });
    
    
    test('Should return 99:59:59 if more than 359999 seconds', () => {
        //assign
        const number = 380000;
        //add
        const response = humanReadable(number);
        //assert
        expect(response).toEqual('99:59:59');
    });
});