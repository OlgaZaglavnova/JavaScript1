'use strict';
let board = new Board();
let status = new Status();
let game = new Game();

board.init(game, status);
game.init(board, status);

board.buildBoard();
board.setClickEvent();