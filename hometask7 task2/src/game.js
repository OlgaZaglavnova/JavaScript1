'use strict';
class Game {
    /**
     * Инициализация игры
     * @param {Board} board 
     * @param {Status} status 
     */
    init(board, status){
        this.board = board;
        this.status = status;
    }
    cellClickHandler(event){
        if (this.clickIsCorrect(event)){
            this.board.paintSymbol(event);
            if (this.hasWon()){
                this.status.setStopStatus();
                this.showWonMessage();
            }
            this.status.changeSymbol();
        }
    }
    /**
     * Метод возвращает true, если статус игры 'play' 
     * и клик был по ячейке игрового поля, которая на настоящий момент пустует
     * @param {Object} event 
     */
    clickIsCorrect(event){
        return this.status.isStatusPlay() && this.board.isClickOnCell(event) && this.board.isCellEmpty(event);
    }
    /**
     * Метод для проверки нет ли выигрышной строки.
     */
    hasWon(){
        return this.isLineWon({x:0, y:0}, {x:0, y:1}, {x:0, y:2})||
               this.isLineWon({x:1, y:0}, {x:1, y:1}, {x:1, y:2})||
               this.isLineWon({x:2, y:0}, {x:2, y:1}, {x:2, y:2})||
               this.isLineWon({x:0, y:0}, {x:1, y:0}, {x:2, y:0})||
               this.isLineWon({x:0, y:1}, {x:1, y:1}, {x:2, y:1})||
               this.isLineWon({x:0, y:2}, {x:1, y:2}, {x:2, y:2})||
               this.isLineWon({x:0, y:0}, {x:1, y:1}, {x:2, y:2})||
               this.isLineWon({x:2, y:0}, {x:1, y:1}, {x:0, y:2})
    }
    /**
     * Метод проверки строки - возвращает true, если строка выигрышная, false - если нет.
     * @param {{x:Integer, y:Integer}} c1 ячейка 1
     * @param {{x:Integer, y:Integer}} c2 ячейка 2
     * @param {{x:Integer, y:Integer}} c3 ячейка 3
     */
    isLineWon(c1, c2, c3){
        let gameLine = this.status.boardValues[c1.y][c1.x] + this.status.boardValues[c2.y][c2.x] + this.status.boardValues[c3.y][c3.x];
        return gameLine === "XXX" || gameLine === "000";
    };
    /**
     * Метод выводит сообщение о выигрыше
     */
    showWonMessage(){
        let msgString = this.status.currentSymbol === "X" ? 'Крестики':'Нолики';
        msgString += " выиграли!";
        let msg = document.querySelector(".gameMessage");
        msg.innerHTML = msgString;
    };
}