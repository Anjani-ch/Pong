import Player from './Player.js';
import Ball from './Ball.js';
import Game from './Game.js';

const gameElement = document.querySelector('#game');

const GAME_WIDTH = 600;
const GAME_HEIGHT = 400;
const GAME_SPEED = 1;

const PLAYER_WIDTH = 10;
const PLAYER_HEIGHT = 80;

const PLAYER_1_WIDTH = PLAYER_WIDTH;
const PLAYER_1_HEIGHT = PLAYER_HEIGHT;
const PLAYER_1_X = PLAYER_WIDTH;
const PLAYER_1_Y = (GAME_HEIGHT / 2) - PLAYER_HEIGHT;
const PLAYER_1_COLOR = 'white';
const PLAYER_1_POSITION = 'left';

const PLAYER_1_KEYS = {
    UP: 87,
    DOWN: 83
};

const PLAYER_2_WIDTH = PLAYER_WIDTH;
const PLAYER_2_HEIGHT = PLAYER_HEIGHT;
const PLAYER_2_X = GAME_WIDTH - (PLAYER_WIDTH * 2);
const PLAYER_2_Y = (GAME_HEIGHT / 2) - PLAYER_HEIGHT;
const PLAYER_2_COLOR = 'white';
const PLAYER_2_POSITION = 'right';

const PLAYER_2_KEYS = {
    UP: 38,
    DOWN: 40
};

const BALL_X = GAME_WIDTH / 2;
const BALL_Y = GAME_HEIGHT / 2;
const BALL_RADIUS = 7;
const BALL_COLOR = 'white';

const player1 = new Player(PLAYER_1_X, PLAYER_1_Y, PLAYER_1_WIDTH, PLAYER_1_HEIGHT, PLAYER_1_COLOR, PLAYER_1_POSITION);
const player2 = new Player(PLAYER_2_X, PLAYER_2_Y, PLAYER_2_WIDTH, PLAYER_2_HEIGHT, PLAYER_2_COLOR, PLAYER_2_POSITION);

const ball = new Ball(BALL_X, BALL_Y, BALL_RADIUS, BALL_COLOR);

const game = new Game(gameElement, GAME_WIDTH, GAME_HEIGHT, GAME_SPEED, player1, player2, ball);

window.addEventListener('DOMContentLoaded', e => game.init());

window.addEventListener('keydown', e => {
    if(PLAYER_1_KEYS.UP === e.keyCode) player1.move('up');
    if(PLAYER_1_KEYS.DOWN === e.keyCode) player1.move('down');

    if(PLAYER_2_KEYS.UP === e.keyCode) player2.move('up');
    if(PLAYER_2_KEYS.DOWN === e.keyCode) player2.move('down');
});

window.addEventListener('keyup', e => {
    if(PLAYER_1_KEYS.UP === e.keyCode) player1.stop();
    if(PLAYER_1_KEYS.DOWN === e.keyCode) player1.stop();

    if(PLAYER_2_KEYS.UP === e.keyCode) player2.stop();
    if(PLAYER_2_KEYS.DOWN === e.keyCode) player2.stop();
});