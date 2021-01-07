import Life from './functions.js';

describe('Game of life', () => {
	let life;
	beforeEach(() => {
		const container = document.createElement('div');
		const speedInput = document.createElement('input');
		const borderCheckerBtn = document.createElement('input');
		const sizeRange = document.createElement('input');
		sizeRange.value = 10;
		const generationCounter = document.createElement('div');
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
	});

	test('should create', () => {
		expect(life).toBeTruthy();
	});

	describe('Figures', () => {
		test('Empty figure must remain empty', () => {
			//arrange
			const matrix = [
				[0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0]
			];
			//act
			const newMatrix = life.newCycle(matrix);
			//assert
			expect(newMatrix).toEqual([
				[0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0]
			]);
		});

		test('Oscillator: horizontal figure must finish vertical', () => {
			//arrange
			const matrix = [
				[0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0],
				[0, 1, 1, 1, 0],
				[0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0]
			];
			//act
			const newMatrix = life.newCycle(matrix);
			//assert
			expect(newMatrix).toEqual([
				[0, 0, 0, 0, 0],
				[0, 0, 1, 0, 0],
				[0, 0, 1, 0, 0],
				[0, 0, 1, 0, 0],
				[0, 0, 0, 0, 0]
			]);
		});

		test('Oscillator: vertical figure must finish horizontal', () => {
			//arrange
			const matrix = [
				[0, 0, 0, 0, 0],
				[0, 0, 1, 0, 0],
				[0, 0, 1, 0, 0],
				[0, 0, 1, 0, 0],
				[0, 0, 0, 0, 0]
			];
			//act
			const newMatrix = life.newCycle(matrix);
			//assert
			expect(newMatrix).toEqual([
				[0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0],
				[0, 1, 1, 1, 0],
				[0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0]
			]);
		});

		test('Oscillator: toad figure', () => {
			//arrange
			const matrix = [
				[0, 0, 0, 0, 0],
				[0, 0, 1, 1, 1],
				[0, 1, 1, 1, 0],
				[0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0]
			];
			//act
			const newMatrix = life.newCycle(matrix);
			//assert
			expect(newMatrix).toEqual([
				[0, 0, 0, 1, 0],
				[0, 1, 0, 0, 1],
				[0, 1, 0, 0, 1],
				[0, 0, 1, 0, 0],
				[0, 0, 0, 0, 0]
			]);
		});

		test('Oscillator: toad figure return', () => {
			//arrange
			const matrix = [
				[0, 0, 0, 1, 0],
				[0, 1, 0, 0, 1],
				[0, 1, 0, 0, 1],
				[0, 0, 1, 0, 0],
				[0, 0, 0, 0, 0]
			];
			//act
			const newMatrix = life.newCycle(matrix);
			//assert
			expect(newMatrix).toEqual([
				[0, 0, 0, 0, 0],
				[0, 0, 1, 1, 1],
				[0, 1, 1, 1, 0],
				[0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0]
			]);
		});

		test('Oscillator: beacon figure', () => {
			//arrange
			const matrix = [
				[1, 1, 0, 0, 0],
				[1, 0, 0, 0, 0],
				[0, 0, 0, 1, 0],
				[0, 0, 1, 1, 0],
				[0, 0, 0, 0, 0]
			];
			//act
			const newMatrix = life.newCycle(matrix);
			//assert
			expect(newMatrix).toEqual([
				[1, 1, 0, 0, 0],
				[1, 1, 0, 0, 0],
				[0, 0, 1, 1, 0],
				[0, 0, 1, 1, 0],
				[0, 0, 0, 0, 0]
			]);
		});

		test('Oscillator: beacon figure return', () => {
			//arrange
			const matrix = [
				[1, 1, 0, 0, 0],
				[1, 1, 0, 0, 0],
				[0, 0, 1, 1, 0],
				[0, 0, 1, 1, 0],
				[0, 0, 0, 0, 0]
			];
			//act
			const newMatrix = life.newCycle(matrix);
			//assert
			expect(newMatrix).toEqual([
				[1, 1, 0, 0, 0],
				[1, 0, 0, 0, 0],
				[0, 0, 0, 1, 0],
				[0, 0, 1, 1, 0],
				[0, 0, 0, 0, 0]
			]);
		});

		test('Still lifes: Square figures must be static', () => {
			//arrange
			const matrix = [
				[0, 0, 0, 1, 1],
				[0, 0, 0, 1, 1],
				[0, 0, 0, 0, 0],
				[1, 1, 0, 0, 0],
				[1, 1, 0, 0, 0]
			];
			//act
			const newMatrix = life.newCycle(matrix);
			//assert
			expect(newMatrix).toEqual([
				[0, 0, 0, 1, 1],
				[0, 0, 0, 1, 1],
				[0, 0, 0, 0, 0],
				[1, 1, 0, 0, 0],
				[1, 1, 0, 0, 0]
			]);
		});

		test('Still lifes: bee-hive', () => {
			//arrange
			const matrix = [
				[0, 0, 0, 0, 0],
				[0, 1, 1, 0, 0],
				[1, 0, 0, 1, 0],
				[0, 1, 1, 0, 0],
				[0, 0, 0, 0, 0]
			];
			//act
			const newMatrix = life.newCycle(matrix);
			//assert
			expect(newMatrix).toEqual([
				[0, 0, 0, 0, 0],
				[0, 1, 1, 0, 0],
				[1, 0, 0, 1, 0],
				[0, 1, 1, 0, 0],
				[0, 0, 0, 0, 0]
			]);
		});

		test('Still lifes: loaf', () => {
			//arrange
			const matrix = [
				[0, 1, 1, 0, 0],
				[1, 0, 0, 1, 0],
				[0, 1, 0, 1, 0],
				[0, 0, 1, 0, 0],
				[0, 0, 0, 0, 0]
			];
			//act
			const newMatrix = life.newCycle(matrix);
			//assert
			expect(newMatrix).toEqual([
				[0, 1, 1, 0, 0],
				[1, 0, 0, 1, 0],
				[0, 1, 0, 1, 0],
				[0, 0, 1, 0, 0],
				[0, 0, 0, 0, 0]
			]);
		});

		test('Still lifes: boat', () => {
			//arrange
			const matrix = [
				[0, 0, 0, 0, 0],
				[0, 1, 1, 0, 0],
				[0, 1, 0, 1, 0],
				[0, 0, 1, 0, 0],
				[0, 0, 0, 0, 0]
			];
			//act
			const newMatrix = life.newCycle(matrix);
			//assert
			expect(newMatrix).toEqual([
				[0, 0, 0, 0, 0],
				[0, 1, 1, 0, 0],
				[0, 1, 0, 1, 0],
				[0, 0, 1, 0, 0],
				[0, 0, 0, 0, 0]
			]);
		});

		test('Still lifes: tub', () => {
			//arrange
			const matrix = [
				[0, 0, 0, 0, 0],
				[0, 0, 1, 0, 0],
				[0, 1, 0, 1, 0],
				[0, 0, 1, 0, 0],
				[0, 0, 0, 0, 0]
			];
			//act
			const newMatrix = life.newCycle(matrix);
			//assert
			expect(newMatrix).toEqual([
				[0, 0, 0, 0, 0],
				[0, 0, 1, 0, 0],
				[0, 1, 0, 1, 0],
				[0, 0, 1, 0, 0],
				[0, 0, 0, 0, 0]
			]);
		});

		test('Glider: step 1', () => {
			//arrange
			const matrix = [
				[0, 0, 1, 0, 0],
				[0, 0, 0, 1, 0],
				[0, 1, 1, 1, 0],
				[0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0]
			];
			//act
			const newMatrix = life.newCycle(matrix);
			//assert
			expect(newMatrix).toEqual([
				[0, 0, 0, 0, 0],
				[0, 1, 0, 1, 0],
				[0, 0, 1, 1, 0],
				[0, 0, 1, 0, 0],
				[0, 0, 0, 0, 0]
			]);
		});

		test('Glider: step 2', () => {
			//arrange
			const matrix = [
				[0, 0, 0, 0, 0],
				[0, 1, 0, 1, 0],
				[0, 0, 1, 1, 0],
				[0, 0, 1, 0, 0],
				[0, 0, 0, 0, 0]
			];
			//act
			const newMatrix = life.newCycle(matrix);
			//assert
			expect(newMatrix).toEqual([
				[0, 0, 0, 0, 0],
				[0, 0, 0, 1, 0],
				[0, 1, 0, 1, 0],
				[0, 0, 1, 1, 0],
				[0, 0, 0, 0, 0]
			]);
		});

		test('Glider: step 3', () => {
			//arrange
			const matrix = [
				[0, 0, 0, 0, 0],
				[0, 0, 0, 1, 0],
				[0, 1, 0, 1, 0],
				[0, 0, 1, 1, 0],
				[0, 0, 0, 0, 0]
			];
			//act
			const newMatrix = life.newCycle(matrix);
			//assert
			expect(newMatrix).toEqual([
				[0, 0, 0, 0, 0],
				[0, 0, 1, 0, 0],
				[0, 0, 0, 1, 1],
				[0, 0, 1, 1, 0],
				[0, 0, 0, 0, 0]
			]);
		});

		test('Glider: step 4 returns to figure of step 1 displaced', () => {
			//arrange
			const matrix = [
				[0, 0, 0, 0, 0],
				[0, 0, 1, 0, 0],
				[0, 0, 0, 1, 1],
				[0, 0, 1, 1, 0],
				[0, 0, 0, 0, 0]
			];
			//act
			const newMatrix = life.newCycle(matrix);
			//assert
			expect(newMatrix).toEqual([
				[0, 0, 0, 0, 0],
				[0, 0, 0, 1, 0],
				[0, 0, 0, 0, 1],
				[0, 0, 1, 1, 1],
				[0, 0, 0, 0, 0]
			]);
		});
	});

	describe('Drawing premade figures', () => {});
});
