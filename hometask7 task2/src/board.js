'use strict';
class Board {
    constructor(){
        this.rowCount = 3;
        this.colCount = 3;
    }
    /**
     * Инициализация объекта класса Board
     * @param {Game} game 
     * @param {Status} status 
     */
    init(game, status){
        this.game = game;
        this.status = status;
    }
    /**
     * Добавление HTML-разметки игрового поля
     */
    buildBoard(){
        let boardHTMLcode = `<div>`;
        boardHTMLcode += `<table class="board">`;
        for (let row = 1; row <= this.rowCount; row++){
            boardHTMLcode += `<tr>`;
            for (let col = 1; col <= this.colCount; col++){
                boardHTMLcode += `<td class="boardCell" data-row=${row} data-col=${col}></td>`;
            }
            boardHTMLcode += `</tr>`;
        }
        boardHTMLcode += `</table>`;
        boardHTMLcode += `</div>`;
        document.body.insertAdjacentHTML('afterbegin', boardHTMLcode);
    }
    /**
     * Установка обработчика событий нажатия на ячейку игрового поля
     */
    setClickEvent(){
        for (let y = 1; y <= this.rowCount; y++){
            for (let x = 1; x <= this.colCount; x++){
                let cell = document.querySelector(`tr:nth-child(${y}) td:nth-child(${x})`);
                cell.addEventListener('click', event => this.game.cellClickHandler(event));
            }
        }
        
    }
    /**
     * Метод для выставления нового символа в массиве значений игры 
     * и в соответствующей ячейке игрового поля
     * @param {Object} event 
     */
    paintSymbol(event){
        let row = +event.target.dataset.row;
        let col = +event.target.dataset.col;
        this.status.boardValues[row - 1][col - 1] = this.status.currentSymbol;
        event.target.textContent = this.status.currentSymbol;
    } 
     /**
     * метод возвращает true, если клик был по ячейке игрового поля
     * @param {Object} event 
     */
    isClickOnCell(event){
        return event.target.tagName === "TD";
    }
    /**
     * метод возвращает true, если клик был по пустой ячейке игрового поля
     * @param {Object} event 
     */
    isCellEmpty(event){
        let row = event.target.dataset.row;
        let col = event.target.dataset.col;
        return this.status.boardValues[row - 1][col - 1] === "";
    }
}