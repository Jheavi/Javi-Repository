import Life from './functions.js';

describe('Game of life', () => {
	let life;
	let container;
	let speedInput;
	let borderCheckerBtn;
	let sizeRange;
	let generationCounter;
	beforeEach(() => {
		container = document.createElement('div');
		speedInput = document.createElement('input');
		borderCheckerBtn = document.createElement('input');
		sizeRange = document.createElement('input');
		sizeRange.value = 10;
		generationCounter = document.createElement('div');
		document.body.appendChild(container);
		document.body.appendChild(speedInput);
		document.body.appendChild(borderCheckerBtn);
		document.body.appendChild(sizeRange);
		document.body.appendChild(generationCounter);
		life = new Life(
			borderCheckerBtn,
			container,
			generationCounter,
			sizeRange,
			speedInput
		);
		life.resetGame();
	});

	afterEach(() => {
		life = null;
		document.body.innerHTML = '';
	});

	test('should create', () => {
		expect(life).toBeTruthy();
	});

	describe('Figures', () => {
		test('Empty figure must remain empty', () => {
			//arrange
			const matrix = life.setMatrix([
				[0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0]
			]);
			//act
			life.newCycle(matrix);
			life.makeHTMLmatrix();
			//assert
			expect(life.getMatrix()).toEqual([
				[0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0]
			]);
		});

		test('Oscillator: horizontal figure must finish vertical', () => {
			//arrange
			const matrix = life.setMatrix([
				[0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0],
				[0, 1, 1, 1, 0],
				[0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0]
			]);
			//act
			life.newCycle(matrix);
			life.makeHTMLmatrix();
			//assert
			expect(life.getMatrix()).toEqual([
				[0, 0, 0, 0, 0],
				[0, 0, 1, 0, 0],
				[0, 0, 1, 0, 0],
				[0, 0, 1, 0, 0],
				[0, 0, 0, 0, 0]
			]);
		});

		test('Oscillator: vertical figure must finish horizontal', () => {
			//arrange
			const matrix = life.setMatrix([
				[0, 0, 0, 0, 0],
				[0, 0, 1, 0, 0],
				[0, 0, 1, 0, 0],
				[0, 0, 1, 0, 0],
				[0, 0, 0, 0, 0]
			]);
			//act
			life.newCycle(matrix);
			life.makeHTMLmatrix();
			//assert
			expect(life.getMatrix()).toEqual([
				[0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0],
				[0, 1, 1, 1, 0],
				[0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0]
			]);
		});

		test('Oscillator: toad figure', () => {
			//arrange
			const matrix = life.setMatrix([
				[0, 0, 0, 0, 0],
				[0, 0, 1, 1, 1],
				[0, 1, 1, 1, 0],
				[0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0]
			]);
			//act
			life.newCycle(matrix);
			life.makeHTMLmatrix();
			//assert
			expect(life.getMatrix()).toEqual([
				[0, 0, 0, 1, 0],
				[0, 1, 0, 0, 1],
				[0, 1, 0, 0, 1],
				[0, 0, 1, 0, 0],
				[0, 0, 0, 0, 0]
			]);
		});

		test('Oscillator: toad figure return', () => {
			//arrange
			const matrix = life.setMatrix([
				[0, 0, 0, 1, 0],
				[0, 1, 0, 0, 1],
				[0, 1, 0, 0, 1],
				[0, 0, 1, 0, 0],
				[0, 0, 0, 0, 0]
			]);
			//act
			life.newCycle(matrix);
			life.makeHTMLmatrix();
			//assert
			expect(life.getMatrix()).toEqual([
				[0, 0, 0, 0, 0],
				[0, 0, 1, 1, 1],
				[0, 1, 1, 1, 0],
				[0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0]
			]);
		});

		test('Oscillator: beacon figure', () => {
			//arrange
			const matrix = life.setMatrix([
				[1, 1, 0, 0, 0],
				[1, 0, 0, 0, 0],
				[0, 0, 0, 1, 0],
				[0, 0, 1, 1, 0],
				[0, 0, 0, 0, 0]
			]);
			//act
			life.newCycle(matrix);
			life.makeHTMLmatrix();
			//assert
			expect(life.getMatrix()).toEqual([
				[1, 1, 0, 0, 0],
				[1, 1, 0, 0, 0],
				[0, 0, 1, 1, 0],
				[0, 0, 1, 1, 0],
				[0, 0, 0, 0, 0]
			]);
		});

		test('Oscillator: beacon figure return', () => {
			//arrange
			const matrix = life.setMatrix([
				[1, 1, 0, 0, 0],
				[1, 1, 0, 0, 0],
				[0, 0, 1, 1, 0],
				[0, 0, 1, 1, 0],
				[0, 0, 0, 0, 0]
			]);
			//act
			life.newCycle(matrix);
			life.makeHTMLmatrix();
			//assert
			expect(life.getMatrix()).toEqual([
				[1, 1, 0, 0, 0],
				[1, 0, 0, 0, 0],
				[0, 0, 0, 1, 0],
				[0, 0, 1, 1, 0],
				[0, 0, 0, 0, 0]
			]);
		});

		test('Still lifes: Square figures must be static', () => {
			//arrange
			const matrix = life.setMatrix([
				[0, 0, 0, 1, 1],
				[0, 0, 0, 1, 1],
				[0, 0, 0, 0, 0],
				[1, 1, 0, 0, 0],
				[1, 1, 0, 0, 0]
			]);
			//act
			life.newCycle(matrix);
			life.makeHTMLmatrix();
			//assert
			expect(life.getMatrix()).toEqual([
				[0, 0, 0, 1, 1],
				[0, 0, 0, 1, 1],
				[0, 0, 0, 0, 0],
				[1, 1, 0, 0, 0],
				[1, 1, 0, 0, 0]
			]);
		});

		test('Still lifes: bee-hive', () => {
			//arrange
			const matrix = life.setMatrix([
				[0, 0, 0, 0, 0],
				[0, 1, 1, 0, 0],
				[1, 0, 0, 1, 0],
				[0, 1, 1, 0, 0],
				[0, 0, 0, 0, 0]
			]);
			//act
			life.newCycle(matrix);
			life.makeHTMLmatrix();
			//assert
			expect(life.getMatrix()).toEqual([
				[0, 0, 0, 0, 0],
				[0, 1, 1, 0, 0],
				[1, 0, 0, 1, 0],
				[0, 1, 1, 0, 0],
				[0, 0, 0, 0, 0]
			]);
		});

		test('Still lifes: loaf', () => {
			//arrange
			const matrix = life.setMatrix([
				[0, 1, 1, 0, 0],
				[1, 0, 0, 1, 0],
				[0, 1, 0, 1, 0],
				[0, 0, 1, 0, 0],
				[0, 0, 0, 0, 0]
			]);
			//act
			life.newCycle(matrix);
			life.makeHTMLmatrix();
			//assert
			expect(life.getMatrix()).toEqual([
				[0, 1, 1, 0, 0],
				[1, 0, 0, 1, 0],
				[0, 1, 0, 1, 0],
				[0, 0, 1, 0, 0],
				[0, 0, 0, 0, 0]
			]);
		});

		test('Still lifes: boat', () => {
			//arrange
			const matrix = life.setMatrix([
				[0, 0, 0, 0, 0],
				[0, 1, 1, 0, 0],
				[0, 1, 0, 1, 0],
				[0, 0, 1, 0, 0],
				[0, 0, 0, 0, 0]
			]);
			//act
			life.newCycle(matrix);
			life.makeHTMLmatrix();
			//assert
			expect(life.getMatrix()).toEqual([
				[0, 0, 0, 0, 0],
				[0, 1, 1, 0, 0],
				[0, 1, 0, 1, 0],
				[0, 0, 1, 0, 0],
				[0, 0, 0, 0, 0]
			]);
		});

		test('Still lifes: tub', () => {
			//arrange
			const matrix = life.setMatrix([
				[0, 0, 0, 0, 0],
				[0, 0, 1, 0, 0],
				[0, 1, 0, 1, 0],
				[0, 0, 1, 0, 0],
				[0, 0, 0, 0, 0]
			]);
			//act
			life.newCycle(matrix);
			life.makeHTMLmatrix();
			//assert
			expect(life.getMatrix()).toEqual([
				[0, 0, 0, 0, 0],
				[0, 0, 1, 0, 0],
				[0, 1, 0, 1, 0],
				[0, 0, 1, 0, 0],
				[0, 0, 0, 0, 0]
			]);
		});

		test('Glider: step 1', () => {
			//arrange
			const matrix = life.setMatrix([
				[0, 0, 1, 0, 0],
				[0, 0, 0, 1, 0],
				[0, 1, 1, 1, 0],
				[0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0]
			]);
			//act
			life.newCycle(matrix);
			life.makeHTMLmatrix();
			//assert
			expect(life.getMatrix()).toEqual([
				[0, 0, 0, 0, 0],
				[0, 1, 0, 1, 0],
				[0, 0, 1, 1, 0],
				[0, 0, 1, 0, 0],
				[0, 0, 0, 0, 0]
			]);
		});

		test('Glider: step 2', () => {
			//arrange
			const matrix = life.setMatrix([
				[0, 0, 0, 0, 0],
				[0, 1, 0, 1, 0],
				[0, 0, 1, 1, 0],
				[0, 0, 1, 0, 0],
				[0, 0, 0, 0, 0]
			]);
			//act
			life.newCycle(matrix);
			life.makeHTMLmatrix();
			//assert
			expect(life.getMatrix()).toEqual([
				[0, 0, 0, 0, 0],
				[0, 0, 0, 1, 0],
				[0, 1, 0, 1, 0],
				[0, 0, 1, 1, 0],
				[0, 0, 0, 0, 0]
			]);
		});

		test('Glider: step 3', () => {
			//arrange
			const matrix = life.setMatrix([
				[0, 0, 0, 0, 0],
				[0, 0, 0, 1, 0],
				[0, 1, 0, 1, 0],
				[0, 0, 1, 1, 0],
				[0, 0, 0, 0, 0]
			]);
			//act
			life.newCycle(matrix);
			life.makeHTMLmatrix();
			//assert
			expect(life.getMatrix()).toEqual([
				[0, 0, 0, 0, 0],
				[0, 0, 1, 0, 0],
				[0, 0, 0, 1, 1],
				[0, 0, 1, 1, 0],
				[0, 0, 0, 0, 0]
			]);
		});

		test('Glider: step 4 returns to figure of step 1 displaced', () => {
			//arrange
			const matrix = life.setMatrix([
				[0, 0, 0, 0, 0],
				[0, 0, 1, 0, 0],
				[0, 0, 0, 1, 1],
				[0, 0, 1, 1, 0],
				[0, 0, 0, 0, 0]
			]);
			//act
			life.newCycle(matrix);
			life.makeHTMLmatrix();
			//assert
			expect(life.getMatrix()).toEqual([
				[0, 0, 0, 0, 0],
				[0, 0, 0, 1, 0],
				[0, 0, 0, 0, 1],
				[0, 0, 1, 1, 1],
				[0, 0, 0, 0, 0]
			]);
		});
	});

	describe('createRandomMatrix', () => {
		test('should create a new matrix with 5 rows', () => {
			//act
			life.createRandomMatrix(5, 5);
			//assert
			expect(life.getMatrix().length).toBe(5);
		});

		test('should create a new matrix with 5 cols', () => {
			//act
			life.createRandomMatrix(5, 5);
			//assert
			expect(life.getMatrix()[0].length).toBe(5);
		});

		test('should create a new non empty matrix', () => {
			//act
			life.createRandomMatrix(5, 5);
			const matrix = life.getMatrix();
			let hasSomeOnes = false;
			for (let i = 0; i < matrix.length; i++) {
				hasSomeOnes = matrix[i].some((element) => element === 1);
				if (hasSomeOnes === true) {
					break;
				}
			}

			//assert
			expect(hasSomeOnes).toBe(true);
		});

		test('should create a new matrix with more zeros than ones', () => {
			//act
			life.createRandomMatrix(5, 5);
			const matrix = life.getMatrix();
			let onesCounter = 0;
			let zerosCounter = 0;
			for (let i = 0; i < matrix.length; i++) {
				for (let j = 0; j < matrix[0].length; j++) {
					matrix[i][j] === 1 ? onesCounter++ : zerosCounter++;
				}
			}

			//assert
			expect(zerosCounter).toBeGreaterThan(onesCounter);
		});
	});

	describe('createEmptyMatrix', () => {
		test('should create a matrix with zeros', () => {
			//act
			life.createEmptyMatrix(5, 5);
			const matrix = life.getMatrix();
			let hasOnes;
			for (let i = 0; i < matrix.length; i++) {
				hasOnes = matrix[i].some((element) => element === 1);
				if (hasOnes === true) {
					break;
				}
			}

			//assert
			expect(hasOnes).toBe(false);
		});

		test('should create a matrix with 5 rows', () => {
			//act
			life.createEmptyMatrix(5, 5);
			const matrix = life.getMatrix();

			//assert
			expect(matrix.length).toBe(5);
		});

		test('should create a matrix with 5 cols', () => {
			//act
			life.createEmptyMatrix(5, 5);
			const matrix = life.getMatrix();

			//assert
			expect(matrix[0].length).toBe(5);
		});
	});

	describe('changeCellColor', () => {
		test('should change a zero cell to one', () => {
			//arrange
			life.setMatrix([[0]]);
			life.makeHTMLmatrix();
			const matrix = life.getMatrix();
			const cell = document.getElementById('0-0');

			//act
			life.changeCellColor(cell);

			//assert
			expect(matrix[0][0]).toBe(1);
		});

		test('should change a zero grey cell to blue', () => {
			//arrange
			life.setMatrix([[0]]);
			life.makeHTMLmatrix();
			const cell = document.getElementById('0-0');

			//act
			life.changeCellColor(cell);

			//assert
			expect(cell.style.backgroundColor.slice(0, 9)).toBe('rgb(0, 0,');
		});

		test('should change a one cell to zero', () => {
			//arrange
			life.setMatrix([[1]]);
			life.makeHTMLmatrix();
			const matrix = life.getMatrix();
			const cell = document.getElementById('0-0');

			//act
			life.changeCellColor(cell);

			//assert
			expect(matrix[0][0]).toBe(0);
		});

		test('should change a one blue cell to grey', () => {
			//arrange
			life.setMatrix([[1]]);
			life.makeHTMLmatrix();
			const cell = document.getElementById('0-0');

			//act
			life.changeCellColor(cell);

			//assert
			expect(cell.style.backgroundColor).toBe('rgb(173, 173, 173)');
		});

		test('should change a zero cell to one if cell is clicked', () => {
			//arrange
			life.setMatrix([[0]]);
			life.makeHTMLmatrix();
			const matrix = life.getMatrix();
			const cell = document.getElementById('0-0');

			//act
			cell.click();

			//assert
			expect(matrix[0][0]).toBe(1);
		});

		test('should change a one cell to zero if cell is clicked', () => {
			//arrange
			life.setMatrix([[1]]);
			life.makeHTMLmatrix();
			const matrix = life.getMatrix();
			const cell = document.getElementById('0-0');

			//act
			cell.click();

			//assert
			expect(matrix[0][0]).toBe(0);
		});
	});

	describe('borderChecker', () => {
		test('should add border to the grid cells if borderCheckerBtn is checked', () => {
			//arrange
			life.setMatrix([[1]]);
			life.makeHTMLmatrix();
			borderCheckerBtn.addEventListener(
				'click',
				() => life.borderChecker(),
				false
			);
			const cell = document.getElementById('0-0');

			//act
			borderCheckerBtn.checked = true;
			life.borderChecker();

			//assert
			expect(cell.style.border).toBe('1px solid rgb(0, 0, 0)');
		});

		test('should remove border to the grid cells if borderCheckerBtn is not checked', () => {
			//arrange
			life.setMatrix([[1]]);
			life.makeHTMLmatrix();
			borderCheckerBtn.addEventListener(
				'click',
				() => life.borderChecker(),
				false
			);
			const cell = document.getElementById('0-0');

			//act
			borderCheckerBtn.checked = false;
			life.borderChecker();

			//assert
			expect(cell.style.border).toBe('');
		});
	});
});
