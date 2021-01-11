import Life from './functions.js';

const borderCheckerBtn = document.getElementById('border-checker');
const container = document.getElementById('grid-container');
const generationCounter = document.getElementById('generations');
const pauseBtn = document.getElementById('pause-button');
const randomBtn = document.getElementById('random-button');
const resetBtn = document.getElementById('reset-button');
const sizeRange = document.getElementById('size-range');
const speedInput = document.getElementById('speed-input');
const startBtn = document.getElementById('start-button');

const gliderBtn = document.getElementById('glider-button');
const spaceShipSBtn = document.getElementById('spaceshipS-button');
const spaceShipSDownBtn = document.getElementById('spaceshipS-down-button');
const pulsarBtn = document.getElementById('pulsar-button');
const gliderPistolBtn = document.getElementById('glider-pistol-button');

const life = new Life(
	borderCheckerBtn,
	container,
	generationCounter,
	sizeRange,
	speedInput
);

borderCheckerBtn.addEventListener('click', () => life.borderChecker(), false);
pauseBtn.addEventListener('click', () => life.stopGame(), false);
randomBtn.addEventListener('click', () => life.random(), false);
resetBtn.addEventListener('click', () => life.resetGame(), false);
sizeRange.addEventListener('input', () => life.resetGame());
speedInput.addEventListener('input', () => life.setSpeed());
startBtn.addEventListener('click', () => life.startGame(), false);

gliderBtn.addEventListener('click', () => life.createGlider(), false);
spaceShipSBtn.addEventListener('click', () => life.createSpaceShipS(), false);
spaceShipSDownBtn.addEventListener(
	'click',
	() => life.createSpaceShipSDown(),
	false
);
pulsarBtn.addEventListener('click', () => life.createPulsar(), false);
gliderPistolBtn.addEventListener(
	'click',
	() => life.createGliderPistol(),
	false
);

life.resetGame();
