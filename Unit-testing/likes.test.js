const likes = require('./likes');

describe('Likes function', () => {
    test('Empty array should return "no one likes this"', () => {
        //assign
        const arr = [];
        //add
        const response = likes(arr);
        //assert
        expect(response).toEqual('no one likes this')
    });
    
    test('["Peter"] array should return "Peter likes this"', () => {
        //assign
        const arr = ['Peter'];
        //add
        const response = likes(arr);
        //assert
        expect(response).toEqual('Peter likes this')
    });
    
    test('["Jacob", "Alex"] array should return "Jacob and Alex like this"', () => {
        //assign
        const arr = ['Jacob', 'Alex'];
        //add
        const response = likes(arr);
        //assert
        expect(response).toEqual('Jacob and Alex like this')
    });
    
    test('["Max", "John", "Mark"] array should return "Max, John and Mark like this"', () => {
        //assign
        const arr = ['Max', 'John', 'Mark'];
        //add
        const response = likes(arr);
        //assert
        expect(response).toEqual('Max, John and Mark like this')
    });
    
    test('["Alex", "Jacob", "Mark", "Max"] array should return "Alex, Jacob and 2 others like this"', () => {
        //assign
        const arr = ['Alex', 'Jacob', 'Mark', 'Max'];
        //add
        const response = likes(arr);
        //assert
        expect(response).toEqual('Alex, Jacob and 2 others like this')
    });
    
    test('["Alex", "Jacob", "Mark", "Max", "Javi", "Izan", "Leti"] array should return "Alex, Jacob and 5 others like this"', () => {
        //assign
        const arr = ['Alex', 'Jacob', 'Mark', 'Max', 'Javi', 'Izan', 'Leti'];
        //add
        const response = likes(arr);
        //assert
        expect(response).toEqual('Alex, Jacob and 5 others like this')
    });
});