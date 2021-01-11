class Life {
	constructor(
		borderCheckerBtn,
		container,
		generationCounter,
		sizeRange,
		speedInput
	) {
		this.rows = 30;
		this.cols = 40;
		this.generationSpeed = 100;
		this.game;
		this.matrix;
		this.gridWidth;
		this.gliderPattern = [
			[0, 1, 0],
			[0, 0, 1],
			[1, 1, 1]
		];
		this.spaceShipSPattern = [
			[1, 0, 0, 1, 0],
			[0, 0, 0, 0, 1],
			[1, 0, 0, 0, 1],
			[0, 1, 1, 1, 1]
		];
		this.spaceShipSDownPattern = [
			[0, 1, 0, 1],
			[1, 0, 0, 0],
			[1, 0, 0, 0],
			[1, 0, 0, 1],
			[1, 1, 1, 0]
		];
		this.pulsarPattern = [
			[0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
			[1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
			[1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
			[0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0],
			[1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
			[1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
			[1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0]
		];
		// prettier-ignore
		this.gliderPistolPattern = [
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, ],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, ],
			[1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
			[1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
		]

		this.borderCheckerBtn = borderCheckerBtn;
		this.container = container;
		this.generationCounter = generationCounter;
		this.sizeRange = sizeRange;
		this.speedInput = speedInput;
	}

	getMatrix() {
		return this.matrix;
	}

	setMatrix(matrix) {
		this.matrix = matrix;
	}

	// Original Game of Life
	aliveOrDie(x, y, matrix) {
		let aliveNeightbours = 0;
		let neighbours = [];

		for (let i = x - 1; i < x + 2; i++) {
			if (i >= 0 && i < matrix.length) {
				for (let j = y - 1; j < y + 2; j++) {
					if (j >= 0 && j < matrix[0].length && (i !== x || j !== y)) {
						neighbours.push(matrix[i][j]);
					}
				}
			}
		}

		aliveNeightbours = neighbours.reduce((acc, curr) => acc + curr);

		// Any live cell with two or three live neighbours survives.
		if (
			(aliveNeightbours === 2 || aliveNeightbours === 3) &&
			matrix[x][y] === 1
		) {
			return true;
			// Any dead cell with three live neighbours becomes a live cell.
		} else if (aliveNeightbours === 3 && matrix[x][y] === 0) {
			return true;
		}
		// All other live cells die in the next generation. Similarly, all other dead cells stay dead.
		return false;
	}

	newCycle() {
		const matrixFinalState = this.matrix.map((element) => element.slice());

		for (let row = 0; row < this.matrix.length; row++) {
			for (let col = 0; col < this.matrix[0].length; col++) {
				let cell = document.getElementById(`${row}-${col}`);
				if (this.aliveOrDie(row, col, this.matrix)) {
					matrixFinalState[row][col] = 1;
					cell.style.backgroundColor = this.createRandomBlue();
				} else {
					matrixFinalState[row][col] = 0;
					cell.style.backgroundColor = 'rgb(173, 173, 173)';
				}
			}
		}

		this.generationCounter.innerHTML++;
		this.matrix = matrixFinalState;
	}

	createEmptyMatrix(rows, cols) {
		const matrix = [];

		for (let rowValue = 0; rowValue < rows; rowValue++) {
			matrix.push([]);
			for (let colValue = 0; colValue < cols; colValue++) {
				matrix[rowValue].push(0);
			}
		}

		this.matrix = matrix;
	}

	createRandomMatrix(rows, cols) {
		//Alberto Gomez idea
		const matrix = [];

		for (let rowValue = 0; rowValue < rows; rowValue++) {
			matrix.push([]);
			for (let colValue = 0; colValue < cols; colValue++) {
				matrix[rowValue].push(Math.round(Math.random() - 0.25));
				if (matrix[rowValue][colValue] === -0) {
					matrix[rowValue][colValue] = 0;
				}
			}
		}

		this.matrix = matrix;
	}

	makeHTMLmatrix() {
		this.container.innerHTML = '';
		this.container.style.setProperty('--grid-rows', this.matrix.length);
		this.container.style.setProperty('--grid-cols', this.matrix[0].length);
		let cellSize = 25;
		this.container.style.setProperty('--cell-width', `${cellSize}px`);
		this.container.style.setProperty('--cell-height', `${cellSize}px`);

		for (let row = 0; row < this.matrix.length; row++) {
			for (let col = 0; col < this.matrix[0].length; col++) {
				let cell = document.createElement('div');
				this.container.appendChild(cell).className = 'cell';
				cell.setAttribute('id', `${row}-${col}`);
				cell.style.backgroundColor = !!this.matrix[row][col]
					? this.createRandomBlue()
					: 'rgb(173, 173, 173)';
				cell.addEventListener(
					'click',
					() => {
						this.changeCellColor(cell);
					},
					false
				);
			}
		}

		this.gridWidth = this.container.clientWidth;

		if (this.gridWidth > window.innerWidth * 0.8) {
			cellSize = Math.floor((window.innerWidth * 0.9) / this.cols);
			this.container.style.setProperty('--cell-width', `${cellSize}px`);
			this.container.style.setProperty('--cell-height', `${cellSize}px`);
		}

		if (cellSize < 15) {
			this.borderCheckerBtn.checked = false;
			document.querySelectorAll('.cell').forEach((element) => {
				element.style.border = 'none';
			});
		}
	}

	changeCellColor(cell) {
		const id = cell.id.split('-');
		const rowValue = id[0];
		const colValue = id[1];

		if (cell.style.backgroundColor === 'rgb(173, 173, 173)') {
			cell.style.backgroundColor = this.createRandomBlue();
			this.matrix[rowValue][colValue] = 1;
		} else {
			cell.style.backgroundColor = 'rgb(173, 173, 173)';
			this.matrix[rowValue][colValue] = 0;
		}
	}

	stopGame() {
		window.clearInterval(this.game);
		this.game = null;
	}

	startGame() {
		if (!this.game) {
			this.game = window.setInterval(() => {
				this.newCycle();
			}, this.generationSpeed);
		}
	}

	resetGame() {
		this.stopGame();
		this.setSpeed();
		this.cols = +this.sizeRange.value;
		this.rows =
			this.cols < 30 ? this.cols : Math.floor(this.sizeRange.value * 0.6);
		this.createEmptyMatrix(this.rows, this.cols);
		this.makeHTMLmatrix();
		this.generationCounter.innerHTML = 0;
		this.speedInput.value = Math.floor(1000 / this.generationSpeed);
	}

	borderChecker() {
		if (this.borderCheckerBtn.checked === true) {
			document.querySelectorAll('.cell').forEach((element) => {
				element.style.border = 'rgb(0, 0, 0) solid 1px';
			});
		} else {
			document.querySelectorAll('.cell').forEach((element) => {
				element.style.border = 'none';
			});
		}
	}

	setSpeed() {
		this.generationSpeed = !this.speedInput
			? this.generationSpeed
			: Math.floor(1000 / this.speedInput.value);
	}

	random() {
		this.resetGame();
		this.createRandomMatrix(this.rows, this.cols);
		this.makeHTMLmatrix();
	}

	drawPattern(pattern, matrix) {
		const position = { startRow: 2, startCol: 2 };
		const size = { rows: pattern.length, cols: pattern[0].length };

		let submatrixX = 0;
		let submatrixY;
		for (let i = position.startRow; i < position.startRow + size.rows; i++) {
			submatrixY = 0;
			for (let j = position.startCol; j < position.startCol + size.cols; j++) {
				matrix[i][j] = pattern[submatrixX][submatrixY];
				let cell = document.getElementById(`${i}-${j}`);
				if (cell) {
					cell.style.backgroundColor =
						matrix[i][j] === 0 ? 'rgb(173, 173, 173)' : this.createRandomBlue();
				}
				submatrixY++;
			}
			submatrixX++;
		}

		return matrix;
	}

	createRandomBlue() {
		return `rgb(0, 0, ${Math.floor(Math.random() * (255 - 120 + 1) + 120)})`;
	}

	createGlider() {
		this.matrix = this.drawPattern(this.gliderPattern, this.matrix);
	}

	createSpaceShipS() {
		this.matrix = this.drawPattern(this.spaceShipSPattern, this.matrix);
	}

	createSpaceShipSDown() {
		this.matrix = this.drawPattern(this.spaceShipSDownPattern, this.matrix);
	}

	createPulsar() {
		this.matrix = this.drawPattern(this.pulsarPattern, this.matrix);
	}

	createGliderPistol() {
		this.matrix = this.drawPattern(this.gliderPistolPattern, this.matrix);
	}
}

export default Life;
