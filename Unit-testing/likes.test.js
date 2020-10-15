const { TestScheduler } = require('jest');
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
    
    test('["Jacob", "Alex"] array should return "Peter likes this"', () => {
        //assign
        const arr = ['Peter'];
        //add
        const response = likes(arr);
        //assert
        expect(response).toEqual('Jacob and Alex like this')
    });
});

describe('example tests', function() {
    it('should return correct text', function() {
      Test.assertEquals(likes([]), 'no one likes this');
      Test.assertEquals(likes(['Peter']), 'Peter likes this');
      Test.assertEquals(likes(['Jacob', 'Alex']), 'Jacob and Alex like this');
      Test.assertEquals(likes(['Max', 'John', 'Mark']), 'Max, John and Mark like this');
      Test.assertEquals(likes(['Alex', 'Jacob', 'Mark', 'Max']), 'Alex, Jacob and 2 others like this');
    });
  });