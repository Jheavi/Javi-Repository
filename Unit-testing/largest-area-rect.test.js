const largestRectangleInGrid = require('./largest-area-rect-4');

describe('Largest area of rectangle', () => {
    test('should return 6', () => {
        //assign
            const matrix = [
                [1,0,1,1,1],
                [0,1,1,0,1],
                [0,1,1,0,1],
                [0,1,1,0,1]
            ];
        //add
            const result = largestRectangleInGrid(matrix);
        //assert
        expect(result).toBe(6);
    })

    test('should return 5', () => {
        //assign
            const matrix = [
                [1,1,1,1,1],
                [1,0,1,0,1],
                [1,1,1,0,1],
                [0,1,1,0,1]
            ];
        //add
            const result = largestRectangleInGrid(matrix);
        //assert
        expect(result).toBe(5);
    })

    test('should return 1', () => {
        //assign
            const matrix = [
                [1,0,0,1,0],
                [0,0,1,0,0],
                [0,1,0,1,0],
                [1,0,0,0,1]
            ];
        //add
            const result = largestRectangleInGrid(matrix);
        //assert
        expect(result).toBe(1);
    })
});