function largestRectangleInGrid(matrix) {
    
    let areaCounter = 0;
    let stack;
    let heights = [];
    let h;
    let w;

    for (let i = 0; i < matrix.length; i++) {
        stack = [];

        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 1) {
                if (i === 0) {
                    heights[j] = 1;
                } else {
                    heights[j] += 1;
                }
            } else {
                heights[j] = 0;
            }

            while (stack.length && heights[j] <= heights[stack[stack.length - 1]]) {
                h = heights[stack.pop()];
                if (stack.length === 0) {
                    w = j;
                } else {
                    w = j - stack[stack.length - 1] - 1;
                }
                areaCounter = Math.max( areaCounter, h * w);
            }

            stack.push(j);
        }

        while (stack.length) {
            h = heights[stack.pop()];
            if (stack.length === 0) {
                w = matrix[0].length;
            } else {
                w = matrix[0].length - stack[stack.length - 1] - 1;
            }
            areaCounter = Math.max(areaCounter, h * w);
        }
    }

    return areaCounter;
}

function consoleLogSubMatrix(matrix) {
    position = {startRow: 2, startCol: 2};
    size = {rows: 2, cols: 2};

    console.log(matrix
        .filter((_, matrixRow) => {return matrixRow >= position.startRow && matrixRow < position.startRow + size.rows})
        .map(row => row.slice(position.startCol, position.startCol + size.cols))
    );
}

module.exports = largestRectangleInGrid;